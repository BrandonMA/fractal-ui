import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
export function useModalAnimation(onDismiss, animationDelay) {
    var _a = useState(true), visible = _a[0], setVisible = _a[1];
    var setVisibleToTrue = useCallback(function () { return setVisible(true); }, [setVisible]);
    var timeoutRef = useRef();
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
    return useMemo(function () { return [visible, hideAnimated, setVisibleToTrue]; }, [visible, hideAnimated, setVisibleToTrue]);
}
//# sourceMappingURL=useModalAnimation.js.map