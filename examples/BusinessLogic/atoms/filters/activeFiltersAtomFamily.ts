import { atomFamily } from 'recoil';

export const activeFiltersAtomFamily = atomFamily({
    key: 'activeFiltersAtom',
    default: false
});
