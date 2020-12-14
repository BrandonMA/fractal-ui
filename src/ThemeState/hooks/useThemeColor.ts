import { RequiredKeys } from 'utility-types';
import { FractalTheme } from '../types';
import { Color } from '../baseColors';
import { useRecoilValue } from 'recoil';
import { fractalThemeColorsAtomFamily } from '../recoil';

export function useThemeColor(name: RequiredKeys<FractalTheme>): Color {
    return useRecoilValue(fractalThemeColorsAtomFamily(name));
}
