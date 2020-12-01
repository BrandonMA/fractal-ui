import React, { useCallback } from 'react';
import { SectionListRenderItemInfo } from 'react-native';
import { OrderCell } from './OrderCell';
import { Order } from '../../../BusinessLogic/models/Order';
import { SafeAreaFullScreenFlatList } from '../../../../src/Layout/components/SafeAreaFullScreenFlatList';
import { BackgroundView } from '../BackgroundView';
import { useSetRecoilState } from 'recoil';
import { ordersPageAtom } from '../../../BusinessLogic/atoms/orders/ordersPageAtom';

interface Props {
    orders: Array<Order>;
}

export function OrdersList(props: Props): JSX.Element {
    const { orders } = props;
    const setPage = useSetRecoilState(ordersPageAtom);

    const renderItem = useCallback(
        (value: SectionListRenderItemInfo<Order>) => {
            const { item, index } = value;
            return <OrderCell order={item} lastItem={index === orders.length - 1} />;
        },
        [orders.length]
    );
    const keyExtractor = useCallback((_, index) => orders[index].id, [orders]);
    const handleEndReached = useCallback(() => setPage((currentPage) => currentPage + 1), [setPage]);

    return (
        <BackgroundView>
            <SafeAreaFullScreenFlatList data={orders} renderItem={renderItem} keyExtractor={keyExtractor} onEndReached={handleEndReached} />
        </BackgroundView>
    );
}
