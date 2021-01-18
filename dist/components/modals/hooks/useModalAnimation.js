import { useCallback, useMemo, useState } from 'react';
export function useModalAnimation(onDismiss, animationDelay) {
    var _a = useState(true), visible = _a[0], setVisible = _a[1];
    var setVisibleToTrue = useCallback(function () { return setVisible(true); }, [setVisible]);
    var hideAnimated = useCallback(function () {
        setVisible(false);
        setTimeout(function () {
            if (onDismiss) {
                onDismiss();
            }
        }, animationDelay);
    }, [setVisible, onDismiss, animationDelay]);
    return useMemo(function () { return [visible, hideAnimated, setVisibleToTrue]; }, [visible, hideAnimated, setVisibleToTrue]);
}
//# sourceMappingURL=useModalAnimation.js.map