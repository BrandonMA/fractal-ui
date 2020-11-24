import { useRecoilState, useSetRecoilState } from 'recoil';
import { activeFiltersAtomFamily } from '../../atoms/filters/activeFiltersAtomFamily';
import { useCallback } from 'react';
import { activeFiltersArrayAtom } from '../../atoms/filters/activeFiltersArrayAtom';
import { useToggleItemFromArray } from '../../../../src/hooks/useToggleItemFromArray';
import { Filter } from '../../models/Filter';

export function useToggleFilterSectionStatus(filter: Filter): () => void {
    const [filterStatus, setFilterStatus] = useRecoilState(activeFiltersAtomFamily(filter.id));
    const setActiveFiltersList = useSetRecoilState(activeFiltersArrayAtom);
    useToggleItemFromArray(filterStatus, filter.id, setActiveFiltersList);
    return useCallback(() => {
        setFilterStatus((currentStatus) => !currentStatus);
    }, [setFilterStatus]);
}
