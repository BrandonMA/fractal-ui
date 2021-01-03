import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { useThemeIdentifier } from './context/hooks/useThemeIdentifier';
export function FractalStatusBar() {
    var currentThemeIdentifier = useThemeIdentifier()[0];
    if (Platform.OS === 'android') {
        return React.createElement(StatusBar, { barStyle: 'light-content' });
    }
    else {
        return React.createElement(StatusBar, { barStyle: currentThemeIdentifier === 'light' ? 'dark-content' : 'light-content' });
    }
}
//# sourceMappingURL=FractalStatusBar.js.map