import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentThemeIdentifierAtom } from '../recoil/atoms/currentThemeIdentifierAtom';
import { fractalThemeSetAtom } from '../recoil/atoms/fractalThemeSetAtom';
import { useLayoutEffect } from 'react';
import { fractalThemeColorsAtomFamily } from '../recoil/atoms/fractalThemeColorsAtomFamily';

export function useUpdateThemeProperties(): void {
    const currentThemeIdentifier = useRecoilValue(currentThemeIdentifierAtom);
    const themeSet = useRecoilValue(fractalThemeSetAtom);
    const currentTheme = themeSet[currentThemeIdentifier];

    const setMainInteractiveColor = useSetRecoilState(fractalThemeColorsAtomFamily('mainInteractiveColor'));
    const setAlternativeInteractiveColor = useSetRecoilState(fractalThemeColorsAtomFamily('alternativeInteractiveColor'));
    const setSuccessInteractiveColor = useSetRecoilState(fractalThemeColorsAtomFamily('successInteractiveColor'));
    const setWarningInteractiveColor = useSetRecoilState(fractalThemeColorsAtomFamily('warningInteractiveColor'));
    const setDangerInteractiveColor = useSetRecoilState(fractalThemeColorsAtomFamily('dangerInteractiveColor'));

    const setNavigationBarColor = useSetRecoilState(fractalThemeColorsAtomFamily('navigationBarColor'));

    const setTabBarColor = useSetRecoilState(fractalThemeColorsAtomFamily('tabBarColor'));

    const setTextColor = useSetRecoilState(fractalThemeColorsAtomFamily('textColor'));

    const setFieldColor = useSetRecoilState(fractalThemeColorsAtomFamily('fieldColor'));

    const setContainerColor = useSetRecoilState(fractalThemeColorsAtomFamily('containerColor'));

    useLayoutEffect(() => {
        if (currentTheme != null) {
            setMainInteractiveColor(currentTheme.mainInteractiveColor);
            setAlternativeInteractiveColor(currentTheme.alternativeInteractiveColor);
            setSuccessInteractiveColor(currentTheme.successInteractiveColor);
            setWarningInteractiveColor(currentTheme.warningInteractiveColor);
            setDangerInteractiveColor(currentTheme.dangerInteractiveColor);

            setNavigationBarColor(currentTheme.navigationBarColor);

            setTabBarColor(currentTheme.tabBarColor);

            setTextColor(currentTheme.textColor);

            setFieldColor(currentTheme.fieldColor);

            setContainerColor(currentTheme.containerColor);
        }
    }, [currentTheme]);

    useRecoilValue(fractalThemeSetAtom);
}
