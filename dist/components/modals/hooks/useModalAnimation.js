import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
export function useModalAnimation(onDismiss, animationDelay, disableStateResetOnDismiss) {
    var _a = useState(true), visible = _a[0], setVisible = _a[1];
    var timeoutRef = useRef();
    var resetVisibility = useCallback(function () {
        if (!disableStateResetOnDismiss) {
            setVisible(true);
        }
    }, [setVisible, disableStateResetOnDismiss]);
    var hideAnimated = useCallback(function () {
        setVisible(false);
        setTimeout(function () {
            if (onDismiss) {
                onDismiss();
            }
        }, animationDelay);
    }, [setVisible, onDismiss, animationDelay]);
    useEffect(function () {
        if (timeoutRef.current != null) {
            clearTimeout(timeoutRef.current);
        }
    }, [timeoutRef]);
    return useMemo(function () { return [visible, hideAnimated, resetVisibility]; }, [visible, hideAnimated, resetVisibility]);
}
//# sourceMappingURL=useModalAnimation.js.map