import { useCallback } from 'react';

export function useHideCallback(setIsSafeToRemove: () => void, onHide?: () => void): () => void {
    return useCallback(() => {
        setIsSafeToRemove();
        if (onHide) {
            setTimeout(onHide, 300);
        }
    }, [setIsSafeToRemove, onHide]);
}
