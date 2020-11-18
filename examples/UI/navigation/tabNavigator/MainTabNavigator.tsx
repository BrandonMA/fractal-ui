import React from 'react';
import { TabNavigator, TabScreen, useCreateTabBarConfig } from '../../../../src';
import { tabRoutes } from '../tabRoutes';
import { ProductsStackNavigator } from '../stackNavigators/products/ProductsStackNavigator';
import { BillsStackNavigator } from '../stackNavigators/bills/BillsStackNavigator';
import { OrdersStackNavigator } from '../stackNavigators/orders/OrdersStackNavigator';
import { ProfileStackNavigator } from '../stackNavigators/profile/ProfileStackNavigator';
import { NotificationsStackNavigator } from '../stackNavigators/notifications/NotificationsStackNavigator';
import { MainTabBar } from './MainTabBar';

export function MainTabNavigator(): JSX.Element {
    const config = useCreateTabBarConfig({
        tabBarVariant: 'middle-action',
        activeItemColor: '#005CB3',
        highlightItemColor: '#005CB3'
    });

    return (
        <TabNavigator defaultRoute={tabRoutes.products} tabBar={<MainTabBar />} tabBarConfig={config}>
            <TabScreen path={tabRoutes.products}>
                <ProductsStackNavigator />
            </TabScreen>
            <TabScreen path={tabRoutes.bills}>
                <BillsStackNavigator />
            </TabScreen>
            <TabScreen path={tabRoutes.profile}>
                <ProfileStackNavigator />
            </TabScreen>
            <TabScreen path={tabRoutes.orders}>
                <OrdersStackNavigator />
            </TabScreen>
            <TabScreen path={tabRoutes.notifications}>
                <NotificationsStackNavigator />
            </TabScreen>
        </TabNavigator>
    );
}
