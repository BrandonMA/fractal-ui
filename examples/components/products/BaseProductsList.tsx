import React, { memo, useCallback } from 'react';
import styled from 'styled-components/native';
import { SectionListRenderItemInfo } from 'react-native';
import { Product } from '../../models/Product';
import { ProductCell } from './ProductCell';

const Container = styled.FlatList`
    flex: 1;
    padding: 12px 12px 0;
    border-radius: 8px;
    background-color: #f2f2f2;
`;

interface Props {
    products: Array<Product>;
    disablePress?: boolean;
    header?: JSX.Element;
}

export const BaseProductsList = memo(
    (props: Props): JSX.Element => {
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
                ListHeaderComponent={props.header}
                data={products}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                numColumns={2}
                columnWrapperStyle={{ flexDirection: 'row', flexGrow: 1 }}
            />
        );
    }
);
