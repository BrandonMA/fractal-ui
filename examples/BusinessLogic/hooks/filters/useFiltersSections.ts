import { useRecoilValue } from 'recoil';
import { filtersSectionsAtom } from '../../atoms/filters/filtersSectionsAtom';
import { FiltersSection } from '../../models/FiltersSection';

export function useFiltersSections(): Array<FiltersSection> {
    return useRecoilValue(filtersSectionsAtom);
}
