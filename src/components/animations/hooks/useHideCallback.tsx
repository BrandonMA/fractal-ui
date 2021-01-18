import { useCallback, useEffect, useRef } from 'react';

export function useHideCallback(setIsSafeToRemove: () => void, onHide?: () => void): () => void {
    const timeoutRef = useRef<NodeJS.Timeout | undefined>();

    const callback = useCallback(() => {
        setIsSafeToRemove();
        if (onHide) {
            timeoutRef.current = setTimeout(onHide, 300);
        }
    }, [setIsSafeToRemove, onHide, timeoutRef]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current != null) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [timeoutRef]);

    return callback;
}
