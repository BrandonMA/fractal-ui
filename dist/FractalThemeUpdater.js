import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { darkFractalTheme } from './themes/darkFractalTheme';
import { lightFractalTheme } from './themes/lightFractalTheme';
import { useThemeIdentifier } from './context';
import { Platform, useColorScheme } from 'react-native';
import { FractalWebBackground } from './FractalWebBackground';
export function FractalThemeUpdater(props) {
    var children = props.children, handleThemeManually = props.handleThemeManually;
    var themeIdentifier = useThemeIdentifier()[0];
    var systemColorScheme = useColorScheme();
    function getTheme() {
        if (handleThemeManually || systemColorScheme == null) {
            return themeIdentifier === 'light' ? lightFractalTheme : darkFractalTheme;
        }
        else {
            return systemColorScheme === 'light' ? lightFractalTheme : darkFractalTheme;
        }
    }
    console.log(lightFractalTheme.colors.background);
    return (React.createElement(ThemeProvider, { theme: getTheme() },
        Platform.OS === 'web' ? React.createElement(FractalWebBackground, null) : null,
        children));
}
//# sourceMappingURL=FractalThemeUpdater.js.map