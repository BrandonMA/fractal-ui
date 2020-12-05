import { atomFamily } from 'recoil';
import { colors } from './Colors';

export const fractalThemeAtomFamily = atomFamily({
    key: 'fractalThemeAtomFamily',
    default: colors.white.base
});

export const fractalThemeInteractiveColorsAtomFamily = atomFamily({
    key: 'fractalThemeInteractiveColorsAtomFamily',
    default: colors.white
});
