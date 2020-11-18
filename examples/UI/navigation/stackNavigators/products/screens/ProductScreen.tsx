import React from 'react';
import { BackgroundScrollView } from '../../../../components/BackgroundScrollView';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { useParams } from '../../../../../../src';
import { ProductScreenContent } from '../../../../components/products/ProductScreenContent';
import { useProducts } from '../../../../../BusinessLogic/hooks/products/useProducts';

interface Params {
    id: string;
}

export function ProductScreen(): JSX.Element {
    const location = useParams<Params>();
    const products = useProducts();
    const product = products.find((product) => product.sku === location.id);

    return (
        <StackScreenContent>
            <BackgroundScrollView>{product != null ? <ProductScreenContent value={product} /> : null}</BackgroundScrollView>
        </StackScreenContent>
    );
}
