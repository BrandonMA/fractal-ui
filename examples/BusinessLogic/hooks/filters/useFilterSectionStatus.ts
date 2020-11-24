import { useRecoilValue } from 'recoil';
import { activeFiltersAtomFamily } from '../../atoms/filters/activeFiltersAtomFamily';

export function useFilterSectionStatus(id: number): boolean {
    return useRecoilValue(activeFiltersAtomFamily(id));
}
