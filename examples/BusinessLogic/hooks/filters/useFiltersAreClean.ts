import { useRecoilValue } from 'recoil';
import { filtersAreCleanSelector } from '../../selectors/filters/filtersAreCleanSelector';

export function useFiltersAreClean(): boolean {
    return useRecoilValue(filtersAreCleanSelector);
}
