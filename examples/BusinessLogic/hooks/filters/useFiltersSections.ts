import { useRecoilValue } from 'recoil';
import { filtersSectionsAtom } from '../../atoms/filters/filtersSectionsAtom';
import { FilterSection } from '../../models/FiltersSection';

export function useFiltersSections(): Array<FilterSection> {
    return useRecoilValue(filtersSectionsAtom);
}
