import React from 'react';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { ProductList } from '../../../../components/products/ProductsList';

export function ProductsScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <ProductList />
        </StackScreenContent>
    );
}
