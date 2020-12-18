import React, { ReactNode, useLayoutEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fractalThemeSetAtom } from './recoil/atoms/fractalThemeSetAtom';
import { FractalThemeSet } from './types/FractalThemeSet';
import { useUpdateThemeProperties } from './hooks/useUpdateThemeProperties';
import { currentThemeIdentifierAtom } from './recoil';
import { StatusBar } from 'react-native';

export interface FractalThemeAppRootProps {
    children: ReactNode;
    themeSet?: FractalThemeSet;
}

export function FractalThemeRoot(props: FractalThemeAppRootProps): JSX.Element {
    const { children, themeSet } = props;
    const setThemeSet = useSetRecoilState(fractalThemeSetAtom);
    const currentThemeIdentifier = useRecoilValue(currentThemeIdentifierAtom);

    useLayoutEffect(() => {
        if (themeSet != null) {
            setThemeSet(themeSet);
        }
    }, [setThemeSet, themeSet]);

    useUpdateThemeProperties();

    return (
        <>
            <StatusBar barStyle={currentThemeIdentifier === 'default' ? 'dark-content' : 'light-content'} />
            {children}
        </>
    );
}
