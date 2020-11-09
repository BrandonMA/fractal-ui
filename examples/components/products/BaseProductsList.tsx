import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { SectionListRenderItemInfo } from 'react-native';
import { Product } from '../../models/Product';
import { ProductCell } from './ProductCell';

const Container = styled.FlatList`
    flex: 1;
    margin: 12px;
    border-radius: 8px;
`;

interface Props {
    products: Array<Product>;
}

export function BaseProductsList(props: Props): JSX.Element {
    const { products } = props;
    const renderItem = useCallback((value: SectionListRenderItemInfo<Product>) => {
        const { item, index } = value;
        return <ProductCell value={item} index={index} />;
    }, []);
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
