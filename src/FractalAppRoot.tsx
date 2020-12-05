import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FractalThemeAppRoot, FractalThemeAppRootProps } from './ThemeState/FractalThemeAppRoot';

enableScreens();

interface FractalAppRootProps extends FractalThemeAppRootProps {
    children: ReactNode;
}

export function FractalAppRoot(props: FractalAppRootProps) {
    const { children, themeSet } = props;

    return (
        <RecoilRoot>
            <FractalThemeAppRoot themeSet={themeSet}>
                <SafeAreaProvider>{children}</SafeAreaProvider>
            </FractalThemeAppRoot>
        </RecoilRoot>
    );
}
