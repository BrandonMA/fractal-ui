import { useEffect } from 'react';
import { Platform } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export function WebBackground(): null {
    const { colors } = useTheme();

    useEffect(() => {
        if (Platform.OS === 'web') {
            document.body.style.backgroundColor = colors.background;
        }
    }, [colors.background]);

    return null;
}
