import React, { ReactNode } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { darkFractalTheme } from './themes/darkFractalTheme';
import { lightFractalTheme } from './themes/lightFractalTheme';
import { useThemeIdentifier } from './context';
import { Platform, useColorScheme } from 'react-native';
import { FractalWebBackground } from './FractalWebBackground';

export interface FractalThemeUpdaterProps {
    children: ReactNode;
    handleThemeManually?: boolean;
}

export function FractalThemeUpdater(props: FractalThemeUpdaterProps): JSX.Element {
    const { children, handleThemeManually } = props;
    const [themeIdentifier] = useThemeIdentifier();
    const systemColorScheme = useColorScheme();

    function getTheme() {
        if (handleThemeManually || systemColorScheme == null) {
            return themeIdentifier === 'light' ? lightFractalTheme : darkFractalTheme;
        } else {
            return systemColorScheme === 'light' ? lightFractalTheme : darkFractalTheme;
        }
    }

    console.log(lightFractalTheme.colors.background);
    return (
        <ThemeProvider theme={getTheme()}>
            {Platform.OS === 'web' ? <FractalWebBackground /> : null}
            {children}
        </ThemeProvider>
    );
}
