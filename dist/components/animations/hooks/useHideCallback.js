import { useCallback } from 'react';
export function useHideCallback(setIsSafeToRemove, onHide) {
    return useCallback(function () {
        setIsSafeToRemove();
        if (onHide) {
            setTimeout(onHide, 300);
        }
    }, [setIsSafeToRemove, onHide]);
}
//# sourceMappingURL=useHideCallback.js.map