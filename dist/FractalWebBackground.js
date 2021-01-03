import { useEffect } from 'react';
import { useTheme } from '@shopify/restyle';
import { Platform } from 'react-native';
export function FractalWebBackground() {
    var theme = useTheme();
    useEffect(function () {
        if (Platform.OS === 'web') {
            document.body.style.backgroundColor = theme.colors.background;
        }
    }, [theme]);
    return null;
}
//# sourceMappingURL=FractalWebBackground.js.map