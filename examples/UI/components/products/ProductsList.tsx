import React, { useCallback, useMemo } from 'react';
import { useFilteredProducts } from '../../../BusinessLogic/hooks/products/useFilteredProducts';
import { BaseProductsList } from './BaseProductsList';
import { ProductSearchField } from './ProductSearchField';
import { FiltersView } from '../filters/FiltersView';
import { useSetRecoilState } from 'recoil';
import { currentProductPageAtom } from '../../../BusinessLogic/atoms/products/currentProductPageAtom';

export function ProductList(): JSX.Element {
    const products = useFilteredProducts();
    const setCurrentProductPage = useSetRecoilState(currentProductPageAtom);
    const header = useMemo(() => {
        return (
            <>
                <ProductSearchField />
                <FiltersView />
            </>
        );
    }, []);
    const searchForMore = useCallback(() => {
        setCurrentProductPage((current) => current + 1);
    }, []);
    return <BaseProductsList products={products} header={header} onEndReached={searchForMore} />;
}
