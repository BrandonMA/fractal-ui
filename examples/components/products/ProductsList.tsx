import React from 'react';
import { useFilteredProducts } from '../../hooks/products/useFilteredProducts';
import { BaseProductsList } from './BaseProductsList';
import { ProductSearchField } from './ProductSearchField';
import { FiltersView } from './FiltersView';

export function ProductList(): JSX.Element {
    const products = useFilteredProducts();
    return (
        <BaseProductsList
            products={products}
            header={
                <>
                    <ProductSearchField />
                    <FiltersView />
                </>
            }
        />
    );
}
