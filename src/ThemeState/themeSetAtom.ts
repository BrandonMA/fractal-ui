import { atom } from 'recoil';
import { FractalThemeSet } from './FractalTheme';
import { colors } from './Colors';

export const defaultTheme = {
    mainInteractiveColor: colors.blue,
    alternativeInteractiveColor: colors.orange,
    successInteractiveColor: colors.green,
    warningInteractiveColor: colors.yellow,
    dangerInteractiveColor: colors.red,
    tabBarInactiveColor: colors.white.base200,
    titleColor: colors.white.base100,
    subTitleColor: colors.white.base200,
    textColor: colors.white.base100,
    helperTextColor: colors.white.base300,
    fieldBackgroundColor: colors.white.base400,
    fieldContrastColor: colors.white.base,
    backgroundColor: colors.white.base400,
    backgroundContrastColor: colors.white.base
};

export const themeSetAtom = atom<FractalThemeSet>({
    key: 'themeSetAtom',
    default: {
        default: defaultTheme
    }
});
