import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export function useModalAnimation(
    onDismiss: (() => void) | undefined,
    animationDelay: number,
    disableStateResetOnDismiss: boolean
): [boolean, () => void, () => void] {
    const [visible, setVisible] = useState(true);
    const setVisibleToTrue = useCallback(() => {
        if (!disableStateResetOnDismiss) {
            setVisible(true);
        }
    }, [setVisible]);
    const timeoutRef = useRef<NodeJS.Timeout | undefined>();

    const hideAnimated = useCallback(() => {
        setVisible(false);
        setTimeout(() => {
            if (onDismiss) {
                onDismiss();
            }
        }, animationDelay);
    }, [setVisible, onDismiss, animationDelay]);

    useEffect(() => {
        if (timeoutRef.current != null) {
            clearTimeout(timeoutRef.current);
        }
    }, [timeoutRef]);

    return useMemo(() => [visible, hideAnimated, setVisibleToTrue], [visible, hideAnimated, setVisibleToTrue]);
}
