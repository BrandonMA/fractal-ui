import { atom } from 'recoil';

export const activeFiltersAtom = atom({
    key: 'activeFiltersAtom',
    default: Array<string>()
});
