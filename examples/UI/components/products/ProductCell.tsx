import React, { memo, useCallback } from 'react';
import { Product } from '../../../BusinessLogic/models/Product';
import { ProductCellContent } from './ProductCellContent';
import { Pressable } from 'react-native';
import { useHistory } from '../../../../src';
import { tabRoutes } from '../../navigation/tabRoutes';
import { ProductCounter } from './ProductCounter';
import { BasicCellContainer } from '../BasicCellContainer';
import styled from 'styled-components/native';

interface ProductCellProps {
    value: Product;
    disablePress?: boolean;
    lastItem: boolean;
    index: number;
}

const Container = styled(Pressable)`
    width: 50%;
`;

export const ProductCell = memo(
    (props: ProductCellProps): JSX.Element => {
        const history = useHistory();
        const { value, disablePress } = props;
        const handleGoToDetails = useCallback(() => {
            if (!disablePress) {
                history.push(`${tabRoutes.products}/details/${value.sku}`);
            }
        }, [value, disablePress]);

        return (
            <Container onPress={handleGoToDetails}>
                <BasicCellContainer lastItem={props.lastItem} index={props.index} isTwoColumnsCell>
                    <ProductCellContent value={value} />
                    <ProductCounter value={value} />
                </BasicCellContainer>
            </Container>
        );
    }
);
