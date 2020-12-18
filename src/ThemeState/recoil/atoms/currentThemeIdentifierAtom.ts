import { atom } from 'recoil';
import { RequiredKeys } from 'utility-types';
import { FractalThemeSet } from '../../types';

export const currentThemeIdentifierAtom = atom<RequiredKeys<FractalThemeSet>>({
    key: 'currentThemeIdentifierAtom',
    default: 'default'
});
