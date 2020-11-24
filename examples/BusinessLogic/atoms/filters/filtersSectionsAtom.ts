import { atom } from 'recoil';
import { FiltersSection } from '../../models/FiltersSection';

export const filtersSectionsAtom = atom({
    key: 'filtersSectionsAtom',
    default: Array<FiltersSection>()
});
