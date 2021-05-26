import { useCallback, useEffect } from 'react';
export function useSliderTouchEffects(setEventSource, handleSliderMove, sliderRef, setDragging, handleMoveStart) {
    const handleTouchMove = useCallback((event) => {
        setEventSource('touch');
        handleSliderMove(event);
    }, [handleSliderMove, setEventSource]);
    const handleCleanTouchStart = useCallback(() => {
        sliderRef.current.removeEventListener('touchmove', handleTouchMove);
        setDragging(false);
    }, [handleTouchMove, sliderRef, setDragging]);
    const handleTouchStart = useCallback((event) => {
        if (event.cancelable)
            event.preventDefault();
        handleMoveStart(event);
        sliderRef.current.addEventListener('touchmove', handleTouchMove);
        sliderRef.current.addEventListener('touchend', handleCleanTouchStart);
        sliderRef.current.addEventListener('touchcancel', handleCleanTouchStart);
    }, [handleCleanTouchStart, handleMoveStart, handleTouchMove, sliderRef]);
    useEffect(() => {
        const sliderDomElement = sliderRef.current;
        sliderDomElement.addEventListener('touchstart', handleTouchStart, { passive: false });
        return () => {
            sliderDomElement.removeEventListener('touchstart', handleTouchStart, { passive: false });
            sliderDomElement.removeEventListener('touchend', handleCleanTouchStart);
            sliderDomElement.removeEventListener('touchcancel', handleCleanTouchStart);
        };
    }, [handleCleanTouchStart, handleTouchStart, sliderRef]);
}
//# sourceMappingURL=useSliderTouchEffects.js.map