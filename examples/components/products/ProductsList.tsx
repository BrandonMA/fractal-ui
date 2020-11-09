import React from 'react';
import { useFilteredProducts } from '../../hooks/products/useFilteredProducts';
import { BaseProductsList } from './BaseProductsList';

export function ProductList(): JSX.Element {
    const products = useFilteredProducts();
    return <BaseProductsList products={products} />;
}
