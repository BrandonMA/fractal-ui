import { useCallback, useMemo, useState } from 'react';

export function useModalAnimation(onDismiss: (() => void) | undefined, animationDelay: number): [boolean, () => void] {
    const [visible, setVisible] = useState(true);

    const hideAnimated = useCallback(() => {
        setVisible(false);
        setTimeout(() => {
            if (onDismiss) {
                onDismiss();
                setVisible(true);
            }
        }, animationDelay);
    }, [setVisible, onDismiss, animationDelay]);

    return useMemo(() => [visible, hideAnimated], [visible, hideAnimated]);
}
