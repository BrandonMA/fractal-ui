import { useRecoilState, useSetRecoilState } from 'recoil';
import { activeFiltersAtomFamily } from '../../atoms/filters/activeFiltersAtomFamily';
import { useCallback } from 'react';
import { activeFiltersArrayAtom } from '../../atoms/filters/activeFiltersArrayAtom';
import { useToggleItemFromArray } from '../../../../src/hooks/useToggleItemFromArray';

export function useToggleFilterSectionStatus(id: string): () => void {
    const [filterStatus, setFilterStatus] = useRecoilState(activeFiltersAtomFamily(id));
    const setActiveFiltersList = useSetRecoilState(activeFiltersArrayAtom);
    useToggleItemFromArray(filterStatus, id, setActiveFiltersList);
    return useCallback(() => {
        setFilterStatus((currentStatus) => !currentStatus);
    }, [setFilterStatus]);
}
