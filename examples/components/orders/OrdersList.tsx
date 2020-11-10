import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { SectionListRenderItemInfo } from 'react-native';
import { OrderCell } from './OrderCell';
import { Order } from '../../models/Order';

const Container = styled.FlatList`
    flex: 1;
    padding: 12px;
    border-radius: 8px;
`;

interface Props {
    orders: Array<Order>;
}

export function OrdersList(props: Props): JSX.Element {
    const { orders } = props;
    const renderItem = useCallback((value: SectionListRenderItemInfo<Order>) => {
        const { item } = value;
        return <OrderCell order={item} />;
    }, []);
    const keyExtractor = useCallback((_, index) => orders[index].id, [orders]);

    return <Container data={orders} renderItem={renderItem} keyExtractor={keyExtractor} />;
}
