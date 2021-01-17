import { useCallback, useMemo, useState } from 'react';

export function useModalAnimation(onDismiss: (() => void) | undefined, animationDelay: number): [boolean, () => void] {
    const [cellIsVisible, setCellIsVisible] = useState(true);

    const hideAnimated = useCallback(() => {
        setCellIsVisible(false);
        setTimeout(() => {
            if (onDismiss) {
                onDismiss();
                setCellIsVisible(true);
            }
        }, animationDelay);
    }, [setCellIsVisible, onDismiss, animationDelay]);

    return useMemo(() => [cellIsVisible, hideAnimated], [cellIsVisible, hideAnimated]);
}
