import { useEffect } from 'react';
import { usePrevValue } from '../../../hooks/usePrevValue';

export function useAnimationLifecycle(visible: boolean, showAnimation: () => void, hideAnimation: () => void): void {
    const prevVisible = usePrevValue(visible);

    useEffect(() => {
        if (visible) {
            showAnimation();
        } else if (prevVisible && !visible) {
            hideAnimation();
        }
    }, [visible, showAnimation, hideAnimation, prevVisible]);
}
