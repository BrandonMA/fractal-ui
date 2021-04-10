import React from 'react';
import { lightFractalTheme } from '../themes/lightFractalTheme';
import { darkFractalTheme } from '../themes/darkFractalTheme';
import { useThemeIdentifier } from '../hooks/useThemeIdentifier';
import { ThemeProvider } from '../context/ThemeContext';
import { PlatformAppearanceDetails } from './PlatformAppearanceDetails';
export function ThemeContent(_a) {
    var children = _a.children, lightTheme = _a.lightTheme, darkTheme = _a.darkTheme;
    var themeIdentifier = useThemeIdentifier();
    var finalLightTheme = lightTheme !== null && lightTheme !== void 0 ? lightTheme : lightFractalTheme;
    var finalDarkTheme = darkTheme !== null && darkTheme !== void 0 ? darkTheme : darkFractalTheme;
    var theme = themeIdentifier === 'light' ? finalLightTheme : finalDarkTheme;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(PlatformAppearanceDetails, null),
        children));
}
//# sourceMappingURL=ThemeContent.js.map