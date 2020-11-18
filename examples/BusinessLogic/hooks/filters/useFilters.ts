import { useRecoilValue } from 'recoil';
import { filtersAtom } from '../../atoms/filters/filtersAtom';
import { FilterSection } from '../../models/FiltersSection';

export function useFilters(): Array<FilterSection> {
    return useRecoilValue(filtersAtom);
}
