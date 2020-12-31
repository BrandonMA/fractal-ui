import { useEffect } from 'react';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from './themes/FractalTheme';
import { Platform } from 'react-native';

export function FractalWebBackground(): null {
    const theme = useTheme<FractalTheme>();

    useEffect(() => {
        if (Platform.OS === 'web') {
            document.body.style.backgroundColor = theme.colors.background;
        }
    }, [theme]);

    return null;
}
