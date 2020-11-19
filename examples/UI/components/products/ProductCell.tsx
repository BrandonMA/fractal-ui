import React, { memo, useCallback } from 'react';
import { Product } from '../../../BusinessLogic/models/Product';
import styled from 'styled-components/native';
import { ProductCellContent } from './ProductCellContent';
import { Dimensions, Pressable } from 'react-native';
import { getCursorStyle, useHistory } from '../../../../src';
import { tabRoutes } from '../../navigation/tabRoutes';
import { ProductCounter } from './ProductCounter';

interface ProductCellProps {
    value: Product;
    index: number;
    disablePress?: boolean;
    lastItem: boolean;
}

const Container = styled(Pressable)`
    background-color: white;
    flex-direction: column;
    border-radius: 8px;
    width: ${(Dimensions.get('window').width - 36) / 2}px;
    padding: 12px 0;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    margin-bottom: 12px;
    ${(props: ProductCellProps) => (props.index % 2 === 0 ? 'margin-right: 6px' : 'margin-left: 6px')}
    ${(props: ProductCellProps) => (props.index % 2 === 0 ? 'margin-left: 12px' : 'margin-right: 12px')}
    ${getCursorStyle}
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
            <Container {...props} onPress={handleGoToDetails}>
                <ProductCellContent value={value} />
                <ProductCounter value={value} />
            </Container>
        );
    }
);
