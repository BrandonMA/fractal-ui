import React, { ReactNode, useLayoutEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fractalThemeSetAtom } from './recoil/atoms/fractalThemeSetAtom';
import { FractalThemeSet } from './types/FractalThemeSet';
import { useUpdateThemeProperties } from './hooks/useUpdateThemeProperties';
import { currentThemeIdentifierAtom } from './recoil';
import { Platform, StatusBar } from 'react-native';

export interface FractalThemeAppRootProps {
    children: ReactNode;
    themeSet?: FractalThemeSet;
}

function useStatusBarStyle(): 'dark-content' | 'light-content' {
    const currentThemeIdentifier = useRecoilValue(currentThemeIdentifierAtom);
    if (Platform.OS === 'ios') {
        return currentThemeIdentifier === 'default' ? 'dark-content' : 'light-content';
    } else {
        return 'light-content';
    }
}

export function FractalThemeRoot(props: FractalThemeAppRootProps): JSX.Element {
    const { children, themeSet } = props;
    const setThemeSet = useSetRecoilState(fractalThemeSetAtom);
    const barStyle = useStatusBarStyle();

    useLayoutEffect(() => {
        if (themeSet != null) {
            setThemeSet(themeSet);
        }
    }, [setThemeSet, themeSet]);

    useUpdateThemeProperties();

    return (
        <>
            <StatusBar barStyle={barStyle} />
            {children}
        </>
    );
}
