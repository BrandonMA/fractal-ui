import { atom } from 'recoil';
import { black, blue, green, orange, red, white, yellow } from '../../baseColors';
import { FractalThemeSet } from '../../types/FractalThemeSet';
import { FractalTheme } from '../../types';

export const defaultTheme: FractalTheme = {
    mainInteractiveColor: blue,
    alternativeInteractiveColor: orange,
    successInteractiveColor: green,
    warningInteractiveColor: yellow,
    dangerInteractiveColor: red,
    tabBarColor: white,
    textColor: white,
    fieldColor: white,
    containerColor: white,
    navigationBarColor: white
};

export const darkTheme: FractalTheme = {
    mainInteractiveColor: blue,
    alternativeInteractiveColor: orange,
    successInteractiveColor: green,
    warningInteractiveColor: yellow,
    dangerInteractiveColor: red,
    tabBarColor: black,
    textColor: black,
    fieldColor: black,
    containerColor: black,
    navigationBarColor: black
};

export const fractalThemeSetAtom = atom<FractalThemeSet>({
    key: 'fractalThemeSetAtom',
    default: {
        default: defaultTheme,
        dark: darkTheme
    }
});
