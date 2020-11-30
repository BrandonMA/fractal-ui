import React from 'react';
import { BackgroundScrollView } from '../../../../components/BackgroundScrollView';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { useParams } from '../../../../../../src';
import { ProductScreenContent } from '../../../../components/products/ProductScreenContent';
import { useRecoilValue } from 'recoil';
import { productSelectorFamily } from '../../../../../BusinessLogic/selectors/products/productSelectorFamily';

interface Params {
    id: string;
}

export function ProductScreen(): JSX.Element {
    const params = useParams<Params>();
    const product = useRecoilValue(productSelectorFamily(Number(params.id)));

    return (
        <StackScreenContent>
            <BackgroundScrollView>{product != null ? <ProductScreenContent value={product} /> : null}</BackgroundScrollView>
        </StackScreenContent>
    );
}
