import React, { ReactNode, useLayoutEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { fractalThemeSetAtom } from './recoil/atoms/fractalThemeSetAtom';
import { FractalThemeSet } from './types/FractalThemeSet';
import { useUpdateThemeProperties } from './hooks/useUpdateThemeProperties';

export interface FractalThemeAppRootProps {
    children: ReactNode;
    themeSet?: FractalThemeSet;
}

export function FractalThemeRoot(props: FractalThemeAppRootProps): JSX.Element {
    const { children, themeSet } = props;
    const setThemeSet = useSetRecoilState(fractalThemeSetAtom);

    useLayoutEffect(() => {
        if (themeSet != null) {
            setThemeSet(themeSet);
        }
    }, [setThemeSet]);

    useUpdateThemeProperties();

    return <>{children}</>;
}
