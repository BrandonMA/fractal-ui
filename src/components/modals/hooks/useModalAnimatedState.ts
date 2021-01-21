import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { InteractionManager } from 'react-native';

export function useModalAnimatedState(
    onDismiss: (() => void) | undefined,
    animationDelay: number,
    disableStateResetOnDismiss: boolean
): [boolean, () => void, () => void] {
    const [visible, setVisible] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | undefined>();

    const resetVisibility = useCallback(() => {
        InteractionManager.runAfterInteractions(() => {
            if (!disableStateResetOnDismiss) {
                setVisible(true);
            }
        });
    }, [setVisible, disableStateResetOnDismiss]);

    const hideAnimated = useCallback(() => {
        InteractionManager.runAfterInteractions(() => {
            setVisible(false);
            setTimeout(() => {
                if (onDismiss) {
                    onDismiss();
                }
            }, animationDelay);
        });
    }, [setVisible, onDismiss, animationDelay]);

    useEffect(() => {
        if (timeoutRef.current != null) {
            clearTimeout(timeoutRef.current);
        }
    }, [timeoutRef]);

    return useMemo(() => [visible, hideAnimated, resetVisibility], [visible, hideAnimated, resetVisibility]);
}
