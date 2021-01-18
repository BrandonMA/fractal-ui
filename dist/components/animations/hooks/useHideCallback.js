import { useCallback, useEffect, useRef } from 'react';
export function useHideCallback(setIsSafeToRemove, onHide) {
    var timeoutRef = useRef();
    var callback = useCallback(function () {
        setIsSafeToRemove();
        if (onHide) {
            timeoutRef.current = setTimeout(onHide, 300);
        }
    }, [setIsSafeToRemove, onHide, timeoutRef]);
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