import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentThemeIdentifierAtom } from '../recoil/atoms/currentThemeIdentifierAtom';
import { fractalThemeSetAtom } from '../recoil/atoms/fractalThemeSetAtom';
import { useLayoutEffect } from 'react';
import { fractalThemeColorsAtomFamily } from '../recoil/atoms/fractalThemeColorsAtomFamily';
export function useUpdateThemeProperties() {
    var currentThemeIdentifier = useRecoilValue(currentThemeIdentifierAtom);
    var themeSet = useRecoilValue(fractalThemeSetAtom);
    var currentTheme = themeSet[currentThemeIdentifier];
    var setMainInteractiveColor = useSetRecoilState(fractalThemeColorsAtomFamily('mainInteractiveColor'));
    var setAlternativeInteractiveColor = useSetRecoilState(fractalThemeColorsAtomFamily('alternativeInteractiveColor'));
    var setSuccessInteractiveColor = useSetRecoilState(fractalThemeColorsAtomFamily('successInteractiveColor'));
    var setWarningInteractiveColor = useSetRecoilState(fractalThemeColorsAtomFamily('warningInteractiveColor'));
    var setDangerInteractiveColor = useSetRecoilState(fractalThemeColorsAtomFamily('dangerInteractiveColor'));
    var setNavigationBarColor = useSetRecoilState(fractalThemeColorsAtomFamily('navigationBarColor'));
    var setTabBarColor = useSetRecoilState(fractalThemeColorsAtomFamily('tabBarColor'));
    var setTextColor = useSetRecoilState(fractalThemeColorsAtomFamily('textColor'));
    var setFieldColor = useSetRecoilState(fractalThemeColorsAtomFamily('fieldColor'));
    var setContainerColor = useSetRecoilState(fractalThemeColorsAtomFamily('containerColor'));
    useLayoutEffect(function () {
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
    }, [
        currentTheme,
        setMainInteractiveColor,
        setAlternativeInteractiveColor,
        setSuccessInteractiveColor,
        setWarningInteractiveColor,
        setDangerInteractiveColor,
        setNavigationBarColor,
        setTabBarColor,
        setTextColor,
        setFieldColor,
        setContainerColor
    ]);
    useRecoilValue(fractalThemeSetAtom);
}
//# sourceMappingURL=useUpdateThemeProperties.js.map