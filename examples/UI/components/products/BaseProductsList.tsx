import React, { memo, useCallback, useMemo } from 'react';
import styled from 'styled-components/native';
import { SectionListRenderItemInfo } from 'react-native';
import { Product } from '../../../BusinessLogic/models/Product';
import { ProductCell } from './ProductCell';
import { FullScreen } from '../../../../src/Layout/components';
import { SafeAreaFullScreenFlatList } from '../../../../src/Layout/components/SafeAreaFullScreenFlatList';

const Container = styled(FullScreen)`
    background-color: #f2f2f2;
`;

interface Props {
    products: Map<number, Product>;
    disablePress?: boolean;
    header?: JSX.Element;
    footer?: JSX.Element;
    onEndReached?: () => void;
}

export const BaseProductsList = memo(
    (props: Props): JSX.Element => {
        const { products, disablePress, onEndReached } = props;
        const productsArray = useMemo(() => Array.from(products.values()), [products]);
        const renderItem = useCallback(
            (value: SectionListRenderItemInfo<Product>) => {
                const { item, index } = value;
                return <ProductCell value={item} index={index} disablePress={disablePress} lastItem={products.size - 1 === index} />;
            },
            [disablePress, products]
        );
        const keyExtractor = useCallback((item) => item.sku.toString(), []);

        return (
            <Container>
                <SafeAreaFullScreenFlatList
                    ListHeaderComponent={props.header}
                    ListFooterComponent={props.footer}
                    data={productsArray}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    removeClippedSubviews
                    windowSize={11}
                    onEndReached={onEndReached}
                />
            </Container>
        );
    }
);
