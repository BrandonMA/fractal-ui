import React, { memo } from 'react';
import { NavigationBar, StackNavigator, StackScreen } from '../../../../../src';
import { tabRoutes } from '../../tabRoutes';
import { stackTitles } from '../../stackTitles';
import { OrdersScreen } from './screens/OrdersScreen';
import { useFetchOrders } from '../../../../BusinessLogic/hooks/orders/useFetchOrders';
import { LoadingView } from '../../../components/LoadingView';
import { OrderDetailsScreen } from './screens/OrderDetailsScreen';

const OrdersStackContent = memo(
    (): JSX.Element => {
        return (
            <StackNavigator path={tabRoutes.orders}>
                <StackScreen path={tabRoutes.orders}>
                    <NavigationBar title={stackTitles.orders} largeTitle />
                    <OrdersScreen />
                </StackScreen>
                <StackScreen path={tabRoutes.orderDetails}>
                    <NavigationBar title={stackTitles.orderDetails} largeTitle={false} />
                    <OrderDetailsScreen />
                </StackScreen>
            </StackNavigator>
        );
    }
);

export function OrdersStackNavigator(): JSX.Element {
    const ready = useFetchOrders();
    return ready ? <OrdersStackContent /> : <LoadingView />;
}
