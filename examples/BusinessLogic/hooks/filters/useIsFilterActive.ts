import { useRecoilState } from 'recoil';
import { activeFiltersAtom } from '../../atoms/filters/activeFiltersAtom';
import { useCallback } from 'react';

export function useAddFilterToActiveState(): (value: string) => void {
    const [activeFilters, setActiveFilters] = useRecoilState(activeFiltersAtom);
    return useCallback(
        (value: string) => {
            if (!activeFilters.includes(value)) {
                setActiveFilters([...activeFilters, value]);
            }
        },
        [activeFilters]
    );
}
