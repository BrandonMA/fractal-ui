import { atom } from 'recoil';

export const activeFiltersArrayAtom = atom({
    key: 'activeFiltersArrayAtom',
    default: Array<number>()
});
