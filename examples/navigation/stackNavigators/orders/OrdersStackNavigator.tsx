import React from 'react';
import { NavigationBar, StackNavigator, StackScreen } from '../../../../src';
import { tabRoutes } from '../../tabRoutes';
import { stackTitles } from '../../stackTitles';
import { OrdersScreen } from './screens/OrdersScreen';

export function OrdersStackNavigator(): JSX.Element {
    return (
        <StackNavigator path={tabRoutes.orders}>
            <StackScreen path={tabRoutes.orders}>
                <NavigationBar title={stackTitles.orders} largeTitle />
                <OrdersScreen />
            </StackScreen>
        </StackNavigator>
    );
}
