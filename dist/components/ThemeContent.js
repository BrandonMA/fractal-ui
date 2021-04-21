import React from 'react';
import { lightFractalTheme } from '../themes/templates/lightFractalTheme';
import { darkFractalTheme } from '../themes/templates/darkFractalTheme';
import { useThemeIdentifier } from '../core/context/hooks/useThemeIdentifier';
import { ThemeProvider } from '../core/context/ThemeContext';
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