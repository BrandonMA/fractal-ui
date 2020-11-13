import React, { memo, useCallback } from 'react';
import styled from 'styled-components/native';
import { SectionListRenderItemInfo } from 'react-native';
import { Product } from '../../models/Product';
import { ProductCell } from './ProductCell';
import { FullScreen } from '../../../src/Layout/components';
import { SafeAreaFullScreenFlatList } from '../../../src/Layout/components/SafeAreaFullScreenFlatList';

const Container = styled(FullScreen)`
    background-color: #f2f2f2;
`;

interface Props {
    products: Array<Product>;
    disablePress?: boolean;
    header?: JSX.Element;
    footer?: JSX.Element;
}

export const BaseProductsList = memo(
    (props: Props): JSX.Element => {
        const { products, disablePress } = props;
        const renderItem = useCallback(
            (value: SectionListRenderItemInfo<Product>) => {
                const { item, index } = value;
                return <ProductCell value={item} index={index} disablePress={disablePress} lastItem={products.length - 2 <= index} />;
            },
            [disablePress]
        );
        const keyExtractor = useCallback((item) => item.sku, []);

        return (
            <Container>
                <SafeAreaFullScreenFlatList
                    ListHeaderComponent={props.header}
                    ListFooterComponent={props.footer}
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    numColumns={2}
                    columnWrapperStyle={{ flexDirection: 'row', flexGrow: 1 }}
                />
            </Container>
        );
    }
);
