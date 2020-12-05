import React, { ReactNode, useLayoutEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentThemeIdentifierAtom } from './currentThemeIdentifierAtom';
import { fractalThemeAtomFamily, fractalThemeInteractiveColorsAtomFamily } from './fractalThemeAtomFamily';
import { themeSetAtom } from './themeSetAtom';
import { FractalThemeSet } from './FractalTheme';

export interface FractalThemeAppRootProps {
    children: ReactNode;
    themeSet?: FractalThemeSet;
}

function useUpdateThemeProperties(): void {
    const currentThemeIdentifier = useRecoilValue(currentThemeIdentifierAtom);
    const themeSet = useRecoilValue(themeSetAtom);
    const currentTheme = themeSet[currentThemeIdentifier];

    const setMainInteractiveColor = useSetRecoilState(fractalThemeInteractiveColorsAtomFamily('mainInteractiveColor'));
    const setAlternativeInteractiveColor = useSetRecoilState(fractalThemeInteractiveColorsAtomFamily('alternativeInteractiveColor'));
    const setSuccessInteractiveColor = useSetRecoilState(fractalThemeInteractiveColorsAtomFamily('successInteractiveColor'));
    const setWarningInteractiveColor = useSetRecoilState(fractalThemeInteractiveColorsAtomFamily('warningInteractiveColor'));
    const setDangerInteractiveColor = useSetRecoilState(fractalThemeInteractiveColorsAtomFamily('dangerInteractiveColor'));

    const setTabBarInactiveColor = useSetRecoilState(fractalThemeAtomFamily('tabBarInactiveColor'));

    const setTitleColor = useSetRecoilState(fractalThemeAtomFamily('titleColor'));
    const setSubTitleColor = useSetRecoilState(fractalThemeAtomFamily('subTitleColor'));
    const setTextColor = useSetRecoilState(fractalThemeAtomFamily('textColor'));
    const setHelperTextColor = useSetRecoilState(fractalThemeAtomFamily('helperTextColor'));

    const setFieldBackgroundColor = useSetRecoilState(fractalThemeAtomFamily('fieldBackgroundColor'));
    const setFieldContrastColor = useSetRecoilState(fractalThemeAtomFamily('fieldContrastColor'));

    const setBackgroundColor = useSetRecoilState(fractalThemeAtomFamily('backgroundColor'));
    const setBackgroundContrastColor = useSetRecoilState(fractalThemeAtomFamily('backgroundContrastColor'));

    useLayoutEffect(() => {
        if (currentTheme != null) {
            setMainInteractiveColor(currentTheme.mainInteractiveColor);
            setAlternativeInteractiveColor(currentTheme.alternativeInteractiveColor);
            setSuccessInteractiveColor(currentTheme.successInteractiveColor);
            setWarningInteractiveColor(currentTheme.warningInteractiveColor);
            setDangerInteractiveColor(currentTheme.dangerInteractiveColor);

            setTabBarInactiveColor(currentTheme.tabBarInactiveColor);

            setTitleColor(currentTheme.titleColor);
            setSubTitleColor(currentTheme.subTitleColor);
            setTextColor(currentTheme.textColor);
            setHelperTextColor(currentTheme.helperTextColor);

            setFieldBackgroundColor(currentTheme.fieldBackgroundColor);
            setFieldContrastColor(currentTheme.fieldContrastColor);

            setBackgroundColor(currentTheme.backgroundColor);
            setBackgroundContrastColor(currentTheme.backgroundContrastColor);
        }
    }, [currentTheme]);

    useRecoilValue(themeSetAtom);
}

export function FractalThemeAppRoot(props: FractalThemeAppRootProps): JSX.Element {
    const { children, themeSet } = props;
    const setThemeSet = useSetRecoilState(themeSetAtom);

    useLayoutEffect(() => {
        if (themeSet != null) {
            setThemeSet(themeSet);
        }
    }, [setThemeSet]);

    useUpdateThemeProperties();

    return <>{children}</>;
}
