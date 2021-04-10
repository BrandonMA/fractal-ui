import { useEffect } from 'react';
import { Platform } from 'react-native';
import { useTheme } from '../hooks/useTheme';
export function WebBackground() {
    var colors = useTheme().colors;
    useEffect(function () {
        if (Platform.OS === 'web') {
            document.body.style.backgroundColor = colors.background;
        }
    }, [colors.background]);
    return null;
}
//# sourceMappingURL=WebBackground.js.map