import React, { useCallback, useMemo } from 'react';
import { BaseProductsList } from './BaseProductsList';
import { ProductSearchField } from './ProductSearchField';
import { FiltersView } from '../filters/FiltersView';
import { useSetRecoilState } from 'recoil';
import { productsPageAtom } from '../../../BusinessLogic/atoms/products/productsPageAtom';
import { filteredProductsPageAtom } from '../../../BusinessLogic/atoms/filters/filteredProductsPageAtom';
import { useProducts } from '../../../BusinessLogic/hooks/products/useProducts';
import { useFilteredProducts } from '../../../BusinessLogic/hooks/filters/useFilteredProducts';
import { useResetPageState } from '../../../BusinessLogic/hooks/products/useResetPageState';
import { useFiltersAreClean } from '../../../BusinessLogic/hooks/filters/useFiltersAreClean';

export function ProductList(): JSX.Element {
    const products = useProducts();
    const filteredProducts = useFilteredProducts();
    const setProductsPage = useSetRecoilState(productsPageAtom);
    const setFilteredProductsPage = useSetRecoilState(filteredProductsPageAtom);
    const areFiltersClean = useFiltersAreClean();

    useResetPageState();

    const header = useMemo(() => {
        return (
            <>
                <ProductSearchField />
                <FiltersView />
            </>
        );
    }, []);

    const searchForMore = useCallback(() => {
        if (areFiltersClean) {
            setProductsPage((current) => current + 1);
        } else {
            setFilteredProductsPage((current) => current + 1);
        }
    }, [areFiltersClean]);

    return <BaseProductsList products={areFiltersClean ? products : filteredProducts} header={header} onEndReached={searchForMore} />;
}
