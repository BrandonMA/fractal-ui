import { atom } from 'recoil';
import { FractalThemeSet } from '../../types/FractalThemeSet';
import { darkTheme, lightTheme } from '../../defaultThemes';

export const fractalThemeSetAtom = atom<FractalThemeSet>({
    key: 'fractalThemeSetAtom',
    default: {
        default: lightTheme,
        dark: darkTheme
    }
});
