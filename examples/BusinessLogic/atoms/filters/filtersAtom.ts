import { atom } from 'recoil';
import { mockFilters } from '../../data/mockFilters';

export const filtersAtom = atom({
    key: 'filtersAtom',
    default: mockFilters
});
