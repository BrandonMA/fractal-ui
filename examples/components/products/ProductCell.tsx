import React, { useCallback } from 'react';
import { Product } from '../../models/Product';
import styled from 'styled-components/native';
import { ProductCellContent } from './ProductCellContent';
import { Pressable } from 'react-native';
import { useHistory } from '../../../src';
import { tabRoutes } from '../../navigation/tabRoutes';
import { ProductCounter } from './ProductCounter';

interface ProductCellProps {
    value: Product;
    index: number;
    disablePress?: boolean;
}

const Container = styled(Pressable)`
    background-color: white;
    flex-direction: column;
    border-radius: 8px;
    flex: 1;
    max-width: 50%;
    padding: 12px 0;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    ${(props: ProductCellProps) => (props.index % 2 === 0 ? 'margin-right: 6px' : 'margin-left: 6px')}
`;

export function ProductCell(props: ProductCellProps): JSX.Element {
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
