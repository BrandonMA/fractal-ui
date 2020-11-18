import { useRecoilValue } from 'recoil';
import { activeFiltersAtom } from '../../atoms/filters/activeFiltersAtom';

export function useIsFilterActive(filter: string): boolean {
    const activeFilters = useRecoilValue(activeFiltersAtom);
    return activeFilters.includes(filter);
}
