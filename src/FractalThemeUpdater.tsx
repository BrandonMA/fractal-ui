import React, { ReactNode } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { darkFractalTheme } from './themes/darkFractalTheme';
import { lightFractalTheme } from './themes/lightFractalTheme';
import { useThemeIdentifier } from './context';
import { Platform, useColorScheme } from 'react-native';
import { FractalWebBackground } from './FractalWebBackground';
import { FractalTheme } from './themes/FractalTheme';

export interface FractalThemeUpdaterProps {
    children: ReactNode;
    handleThemeManually?: boolean;
    lightTheme?: FractalTheme;
    darkTheme?: FractalTheme;
}

export function FractalThemeUpdater({ children, handleThemeManually, lightTheme, darkTheme }: FractalThemeUpdaterProps): JSX.Element {
    const [themeIdentifier] = useThemeIdentifier();
    const systemColorScheme = useColorScheme();
    const finalLightTheme = lightTheme ?? lightFractalTheme;
    const finalDarkTheme = darkTheme ?? darkFractalTheme;

    function getTheme() {
        if (handleThemeManually || systemColorScheme == null) {
            return themeIdentifier === 'light' ? finalLightTheme : finalDarkTheme;
        } else {
            return systemColorScheme === 'light' ? finalLightTheme : finalDarkTheme;
        }
    }

    return (
        <ThemeProvider theme={getTheme()}>
            {Platform.OS === 'web' ? <FractalWebBackground /> : null}
            {children}
        </ThemeProvider>
    );
}
