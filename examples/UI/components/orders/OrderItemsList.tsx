import React, { useCallback } from 'react';
import { SectionListRenderItemInfo } from 'react-native';
import { SafeAreaFullScreenFlatList } from '../../../../src/Layout/components/SafeAreaFullScreenFlatList';
import { BackgroundView } from '../BackgroundView';
import { OrderItem } from '../../../BusinessLogic/models/OrderItem';
import { OrderItemCell } from './OrderItemCell';

interface Props {
    items: Array<OrderItem>;
}

export function OrderItemsList(props: Props): JSX.Element {
    const { items } = props;
    const renderItem = useCallback(
        (value: SectionListRenderItemInfo<OrderItem>) => {
            const { item, index } = value;
            return <OrderItemCell item={item} lastItem={index === items.length - 1} />;
        },
        [items.length]
    );
    const keyExtractor = useCallback((item) => item.id, []);

    return (
        <BackgroundView>
            <SafeAreaFullScreenFlatList data={items} renderItem={renderItem} keyExtractor={keyExtractor} />
        </BackgroundView>
    );
}
