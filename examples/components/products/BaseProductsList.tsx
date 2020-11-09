import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { SectionListRenderItemInfo } from 'react-native';
import { Product } from '../../models/Product';
import { ProductCell } from './ProductCell';

const Container = styled.FlatList`
    flex: 1;
    margin: 12px 12px 0;
    border-radius: 8px;
    background-color: #f6f6f6;
`;

interface Props {
    products: Array<Product>;
    disablePress?: boolean;
}

export function BaseProductsList(props: Props): JSX.Element {
    const { products, disablePress } = props;
    const renderItem = useCallback(
        (value: SectionListRenderItemInfo<Product>) => {
            const { item, index } = value;
            return <ProductCell value={item} index={index} disablePress={disablePress} />;
        },
        [disablePress]
    );
    const keyExtractor = useCallback((item) => item.sku, []);

    return (
        <Container
            data={products}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={2}
            columnWrapperStyle={{ flexDirection: 'row', flexGrow: 1 }}
        />
    );
}
