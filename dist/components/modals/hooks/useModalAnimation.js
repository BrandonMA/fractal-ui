import { useCallback, useMemo, useState } from 'react';
export function useModalAnimation(onDismiss, animationDelay) {
    var _a = useState(true), cellIsVisible = _a[0], setCellIsVisible = _a[1];
    var hideAnimated = useCallback(function () {
        setCellIsVisible(false);
        setTimeout(function () {
            if (onDismiss) {
                onDismiss();
                setCellIsVisible(true);
            }
        }, animationDelay);
    }, [setCellIsVisible, onDismiss, animationDelay]);
    return useMemo(function () { return [cellIsVisible, hideAnimated]; }, [cellIsVisible, hideAnimated]);
}
//# sourceMappingURL=useModalAnimation.js.map