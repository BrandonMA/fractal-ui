import { useEffect } from 'react';
import { useTheme } from '../core/context/hooks/useTheme';

export function WebBackground(): null {
    const { colors } = useTheme();

    useEffect(() => {
        document.body.style.backgroundColor = colors.background;
    }, [colors.background]);

    return null;
}
