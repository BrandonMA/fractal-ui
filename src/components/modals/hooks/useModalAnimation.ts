import { useCallback, useMemo, useState } from 'react';

export function useModalAnimation(onDismiss: (() => void) | undefined, animationDelay: number): [boolean, () => void, () => void] {
    const [visible, setVisible] = useState(true);
    const setVisibleToTrue = useCallback(() => setVisible(true), [setVisible]);

    const hideAnimated = useCallback(() => {
        setVisible(false);
        setTimeout(() => {
            if (onDismiss) {
                onDismiss();
            }
        }, animationDelay);
    }, [setVisible, onDismiss, animationDelay]);

    return useMemo(() => [visible, hideAnimated, setVisibleToTrue], [visible, hideAnimated, setVisibleToTrue]);
}
