import { useCallback, useMemo, useState } from 'react';
export function useModalAnimation(onDismiss, animationDelay) {
    var _a = useState(true), visible = _a[0], setVisible = _a[1];
    var hideAnimated = useCallback(function () {
        setVisible(false);
        setTimeout(function () {
            if (onDismiss) {
                onDismiss();
                setVisible(true);
            }
        }, animationDelay);
    }, [setVisible, onDismiss, animationDelay]);
    return useMemo(function () { return [visible, hideAnimated]; }, [visible, hideAnimated]);
}
//# sourceMappingURL=useModalAnimation.js.map