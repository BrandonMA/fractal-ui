import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { darkFractalTheme } from './themes/darkFractalTheme';
import { lightFractalTheme } from './themes/lightFractalTheme';
import { useThemeIdentifier } from './context';
import { Platform } from 'react-native';
import { FractalWebBackground } from './FractalWebBackground';
import { FractalStatusBar } from './FractalStatusBar';
export function FractalThemeUpdater(_a) {
    var children = _a.children, lightTheme = _a.lightTheme, darkTheme = _a.darkTheme;
    var themeIdentifier = useThemeIdentifier()[0];
    var finalLightTheme = lightTheme !== null && lightTheme !== void 0 ? lightTheme : lightFractalTheme;
    var finalDarkTheme = darkTheme !== null && darkTheme !== void 0 ? darkTheme : darkFractalTheme;
    var theme = themeIdentifier === 'light' ? finalLightTheme : finalDarkTheme;
    return (React.createElement(ThemeProvider, { theme: theme },
        Platform.OS === 'web' ? React.createElement(FractalWebBackground, null) : null,
        Platform.OS !== 'web' ? React.createElement(FractalStatusBar, null) : null,
        children));
}
//# sourceMappingURL=FractalThemeUpdater.js.map