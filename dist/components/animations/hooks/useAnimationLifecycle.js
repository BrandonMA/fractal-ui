import { useEffect } from 'react';
import { usePrevValue } from '../../../hooks/usePrevValue';
export function useAnimationLifecycle(visible, showAnimation, hideAnimation) {
    var prevVisible = usePrevValue(visible);
    useEffect(function () {
        if (visible) {
            showAnimation();
        }
        else if (prevVisible && !visible) {
            hideAnimation();
        }
    }, [visible, showAnimation, hideAnimation, prevVisible]);
}
//# sourceMappingURL=useAnimationLifecycle.js.map