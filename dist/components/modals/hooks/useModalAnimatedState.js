import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { InteractionManager } from 'react-native';
export function useModalAnimatedState(onDismiss, animationDelay, disableStateResetOnDismiss) {
    var _a = useState(true), visible = _a[0], setVisible = _a[1];
    var timeoutRef = useRef();
    var resetVisibility = useCallback(function () {
        InteractionManager.runAfterInteractions(function () {
            if (!disableStateResetOnDismiss) {
                setVisible(true);
            }
        });
    }, [setVisible, disableStateResetOnDismiss]);
    var hideAnimated = useCallback(function () {
        InteractionManager.runAfterInteractions(function () {
            setVisible(false);
            setTimeout(function () {
                if (onDismiss) {
                    onDismiss();
                }
            }, animationDelay);
        });
    }, [setVisible, onDismiss, animationDelay]);
    useEffect(function () {
        if (timeoutRef.current != null) {
            clearTimeout(timeoutRef.current);
        }
    }, [timeoutRef]);
    return useMemo(function () { return [visible, hideAnimated, resetVisibility]; }, [visible, hideAnimated, resetVisibility]);
}
//# sourceMappingURL=useModalAnimatedState.js.map