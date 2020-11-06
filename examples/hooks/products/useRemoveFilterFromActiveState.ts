import { useRecoilState } from 'recoil';
import { activeFiltersAtom } from '../../atoms/activeFiltersAtom';
import { useCallback } from 'react';

export function useRemoveFilterFromActiveState(): (value: string) => void {
    const [activeFilters, setActiveFilters] = useRecoilState(activeFiltersAtom);
    return useCallback(
        (value: string) => {
            if (activeFilters.includes(value)) {
                const index = activeFilters.findIndex((currentValue) => value === currentValue);
                const newFilters = [...activeFilters];
                newFilters.splice(index, 1);
                setActiveFilters(newFilters);
            }
        },
        [activeFilters]
    );
}
