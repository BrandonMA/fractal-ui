import React, { ReactNode } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { darkFractalTheme } from './themes/darkFractalTheme';
import { lightFractalTheme } from './themes/lightFractalTheme';
import { useThemeIdentifier } from './context';
import { Platform } from 'react-native';
import { FractalWebBackground } from './FractalWebBackground';
import { FractalTheme } from './themes/FractalTheme';
import { FractalStatusBar } from './FractalStatusBar';

export interface FractalThemeUpdaterProps {
    children: ReactNode;
    handleThemeManually?: boolean;
    lightTheme?: FractalTheme;
    darkTheme?: FractalTheme;
}

export function FractalThemeUpdater({ children, lightTheme, darkTheme }: FractalThemeUpdaterProps): JSX.Element {
    const [themeIdentifier] = useThemeIdentifier();
    const finalLightTheme = lightTheme ?? lightFractalTheme;
    const finalDarkTheme = darkTheme ?? darkFractalTheme;
    const theme = themeIdentifier === 'light' ? finalLightTheme : finalDarkTheme;

    return (
        <ThemeProvider theme={theme}>
            {Platform.OS === 'web' ? <FractalWebBackground /> : null}
            <FractalStatusBar />
            {children}
        </ThemeProvider>
    );
}
