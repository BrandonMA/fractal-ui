import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { SectionListRenderItemInfo } from 'react-native';
import { OrderCell } from './OrderCell';
import { Order } from '../../models/Order';
import { SafeAreaFullScreenFlatList } from '../../../src/Layout/components/SafeAreaFullScreenFlatList';
import { FullScreen } from '../../../src/Layout/components';

const Container = styled(FullScreen)`
    background-color: #f2f2f2;
`;

interface Props {
    orders: Array<Order>;
}

export function OrdersList(props: Props): JSX.Element {
    const { orders } = props;
    const renderItem = useCallback(
        (value: SectionListRenderItemInfo<Order>) => {
            const { item, index } = value;
            return <OrderCell order={item} lastItem={index === orders.length - 1} />;
        },
        [orders.length]
    );
    const keyExtractor = useCallback((_, index) => orders[index].id, [orders]);

    return (
        <Container>
            <SafeAreaFullScreenFlatList data={orders} renderItem={renderItem} keyExtractor={keyExtractor} />
        </Container>
    );
}
