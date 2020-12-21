import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FractalThemeRoot, FractalThemeAppRootProps } from './ThemeState/FractalThemeRoot';
import { NavigationRoot } from './Navigation';

enableScreens();

interface FractalAppRootProps extends FractalThemeAppRootProps {
    children: ReactNode;
}

export function FractalAppRoot(props: FractalAppRootProps): JSX.Element {
    const { children, themeSet } = props;

    return (
        <RecoilRoot>
            <FractalThemeRoot themeSet={themeSet}>
                <NavigationRoot>
                    <SafeAreaProvider>{children}</SafeAreaProvider>
                </NavigationRoot>
            </FractalThemeRoot>
        </RecoilRoot>
    );
}
