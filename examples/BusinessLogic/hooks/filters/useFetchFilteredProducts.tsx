import { useRecoilValue, useSetRecoilState } from 'recoil';
import { activeFiltersArrayAtom } from '../../atoms/filters/activeFiltersArrayAtom';
import { productsSearchAtom } from '../../atoms/filters/productsSearchAtom';
import { useEffect } from 'react';
import { fetchProducts } from '../../networking/products/fetchProducts';
import produce from 'immer';
import { filteredProductsAtom } from '../../atoms/filters/filteredProductsAtom';
import { filteredProductsPageAtom } from '../../atoms/filters/filteredProductsPageAtom';

export function useFetchFilteredProducts() {
    const activeFilters = useRecoilValue(activeFiltersArrayAtom);
    const search = useRecoilValue(productsSearchAtom);
    const page = useRecoilValue(filteredProductsPageAtom);
    const setFilteredProducts = useSetRecoilState(filteredProductsAtom);

    useEffect(() => {
        const abortController = new AbortController();
        if (activeFilters.length > 0 || search !== '') {
            fetchProducts(page, abortController.signal, activeFilters, search).then((newProducts) => {
                setFilteredProducts((currentProducts) => {
                    if (page === 1) {
                        return newProducts;
                    } else {
                        return produce(currentProducts, (draft) => {
                            newProducts.forEach((value, key) => {
                                draft.set(key, value);
                            });
                        });
                    }
                });
            });
        }
    }, [activeFilters, search, page, setFilteredProducts]);
}
