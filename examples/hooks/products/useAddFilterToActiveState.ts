import { useRecoilValue } from 'recoil';
import { activeFiltersAtom } from '../../atoms/activeFiltersAtom';

export function useIsFilterActive(filter: string): boolean {
    const activeFilters = useRecoilValue(activeFiltersAtom);
    return activeFilters.includes(filter);
}
