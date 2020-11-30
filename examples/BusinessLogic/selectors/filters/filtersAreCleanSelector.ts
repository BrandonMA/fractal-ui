import { selector } from 'recoil';
import { activeFiltersArrayAtom } from '../../atoms/filters/activeFiltersArrayAtom';
import { productsSearchAtom } from '../../atoms/filters/productsSearchAtom';

export const filtersAreCleanSelector = selector({
    key: 'filtersAreCleanSelector',
    get: (props) => {
        const { get } = props;
        const filters = get(activeFiltersArrayAtom);
        const search = get(productsSearchAtom);
        return filters.length === 0 && search === '';
    }
});
