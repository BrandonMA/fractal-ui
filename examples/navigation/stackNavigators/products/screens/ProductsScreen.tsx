import React from 'react';
import { BackgroundView } from '../../../../components/BackgroundView';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { SearchField } from '../../../../components/SearchField';
import { FiltersView } from '../../../../components/products/FiltersView';
import { ProductList } from '../../../../components/products/ProductsList';

export function ProductsScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <SearchField placeholder='Buscar...' placeholderTextColor='#999' />
                <FiltersView />
                <ProductList />
            </BackgroundView>
        </StackScreenContent>
    );
}
