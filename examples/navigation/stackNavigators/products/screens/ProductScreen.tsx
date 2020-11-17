import React from 'react';
import { BackgroundView } from '../../../../components/BackgroundView';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { useParams } from '../../../../../src';
import { ProductScreenContent } from '../../../../components/products/ProductScreenContent';
import { mockProducts } from '../../../../data/mockProducts';

interface Params {
    id: string;
}

export function ProductScreen(): JSX.Element {
    const location = useParams<Params>();
    const product = mockProducts.find((product) => product.sku === location.id);

    return (
        <StackScreenContent>
            <BackgroundView>{product != null ? <ProductScreenContent value={product} /> : null}</BackgroundView>
        </StackScreenContent>
    );
}
