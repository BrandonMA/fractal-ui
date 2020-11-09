import React from 'react';
import { BackgroundView } from '../../../../components/BackgroundView';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { FiltersView } from '../../../../components/products/FiltersView';
import { ProductList } from '../../../../components/products/ProductsList';
import { ProductSearchField } from '../../../../components/products/ProductSearchField';

export function ProductsScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <ProductSearchField />
                <FiltersView />
                <ProductList />
            </BackgroundView>
        </StackScreenContent>
    );
}
