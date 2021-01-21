import { useCallback, useEffect, useRef } from 'react';
export function useHideCallback(setIsSafeToRemove, delay, onHide) {
    var timeoutRef = useRef();
    var callback = useCallback(function () {
        setIsSafeToRemove();
        if (onHide) {
            timeoutRef.current = setTimeout(onHide, delay);
        }
    }, [setIsSafeToRemove, onHide, timeoutRef, delay]);
    useEffect(function () {
        return function () {
            if (timeoutRef.current != null) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [timeoutRef]);
    return callback;
}
//# sourceMappingURL=useHideCallback.js.map