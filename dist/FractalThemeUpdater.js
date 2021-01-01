import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { darkFractalTheme } from './themes/darkFractalTheme';
import { lightFractalTheme } from './themes/lightFractalTheme';
import { useThemeIdentifier } from './context';
import { Platform, useColorScheme } from 'react-native';
import { FractalWebBackground } from './FractalWebBackground';
export function FractalThemeUpdater(_a) {
    var children = _a.children, handleThemeManually = _a.handleThemeManually, lightTheme = _a.lightTheme, darkTheme = _a.darkTheme;
    var themeIdentifier = useThemeIdentifier()[0];
    var systemColorScheme = useColorScheme();
    var finalLightTheme = lightTheme !== null && lightTheme !== void 0 ? lightTheme : lightFractalTheme;
    var finalDarkTheme = darkTheme !== null && darkTheme !== void 0 ? darkTheme : darkFractalTheme;
    function getTheme() {
        if (handleThemeManually || systemColorScheme == null) {
            return themeIdentifier === 'light' ? finalLightTheme : finalDarkTheme;
        }
        else {
            return systemColorScheme === 'light' ? finalLightTheme : finalDarkTheme;
        }
    }
    return (React.createElement(ThemeProvider, { theme: getTheme() },
        Platform.OS === 'web' ? React.createElement(FractalWebBackground, null) : null,
        children));
}
//# sourceMappingURL=FractalThemeUpdater.js.map