import { atomFamily } from 'recoil';
import { Color, white } from '../../baseColors';
import { RequiredKeys } from 'utility-types';
import { FractalTheme } from '../../types/FractalTheme';

export const fractalThemeColorsAtomFamily = atomFamily<Color, RequiredKeys<FractalTheme>>({
    key: 'fractalThemeColorsAtomFamily',
    default: white
});
