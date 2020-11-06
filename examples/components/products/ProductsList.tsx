import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { SectionListRenderItemInfo } from 'react-native';
import { mockProducts } from '../../data';
import { Product } from '../../data/Product';
import { ProductCell } from './ProductCell';

const Container = styled.FlatList`
    flex: 1;
    margin: 0 12px 12px 12px;
    border-radius: 8px;
`;

export function ProductList(): JSX.Element {
    const renderItem = useCallback((value: SectionListRenderItemInfo<Product>) => {
        const { item, index } = value;
        return <ProductCell value={item} index={index} />;
    }, []);

    const keyExtractor = useCallback((_, index) => mockProducts[index].name, []);

    return (
        <Container
            data={mockProducts}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={2}
            columnWrapperStyle={{ flexDirection: 'row', flexGrow: 1 }}
        />
    );
}
