import { useRecoilValue, useSetRecoilState } from 'recoil';
import { productsPageAtom } from '../../atoms/products/productsPageAtom';
import { filteredProductsPageAtom } from '../../atoms/filters/filteredProductsPageAtom';
import { productsSearchAtom } from '../../atoms/filters/productsSearchAtom';
import { activeFiltersArrayAtom } from '../../atoms/filters/activeFiltersArrayAtom';
import { useEffect } from 'react';
import { usePrevValue } from '../../../../src';

export function useResetPageState(): void {
    const setProductsPage = useSetRecoilState(productsPageAtom);
    const setFilteredProductsPage = useSetRecoilState(filteredProductsPageAtom);
    const search = useRecoilValue(productsSearchAtom);
    const filters = useRecoilValue(activeFiltersArrayAtom);
    const prevSearchValue = usePrevValue(search);
    const prevFiltersValue = usePrevValue(filters);

    useEffect(() => {
        if (search !== prevSearchValue || filters !== prevFiltersValue) {
            setProductsPage(1);
            setFilteredProductsPage(1);
        }
    }, [search, filters, prevSearchValue, prevFiltersValue]);
}
