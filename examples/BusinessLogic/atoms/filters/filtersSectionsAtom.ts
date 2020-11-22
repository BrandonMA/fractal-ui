import { atom } from 'recoil';
import { mockFiltersSections } from '../../data/mockFiltersSections';

export const filtersSectionsAtom = atom({
    key: 'filtersSectionsAtom',
    default: mockFiltersSections
});
