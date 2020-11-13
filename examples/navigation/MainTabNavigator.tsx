import React from 'react';
import { TabBar, TabBarItem, TabNavigator, TabScreen, useDefaultTabBarConfig } from '../../src';
import { tabRoutes } from './tabRoutes';
import { ProductsStackNavigator } from './stackNavigators/products/ProductsStackNavigator';
import { BillsStackNavigator } from './stackNavigators/bills/BillsStackNavigator';
import { OrdersStackNavigator } from './stackNavigators/orders/OrdersStackNavigator';
import { ProductsIcon } from '../icons/ProductsIcon';
import { BillsIcon } from '../icons/BillsIcon';
import { OrdersIcon } from '../icons/OrdersIcon';
import { UserIcon } from '../icons/UserIcon';
import { ProfileStackNavigator } from './stackNavigators/profile/ProfileStackNavigator';
import { NotificationsStackNavigator } from './stackNavigators/notifications/NotificationsStackNavigator';
import { NotificationsIcon } from '../icons/NotificationsIcon';
import { stackTitles } from './stackTitles';

function MainTabBar(): JSX.Element {
    return (
        <TabBar>
            <TabBarItem title={stackTitles.products} path={tabRoutes.products}>
                {(color, size) => <ProductsIcon width={size} height={size} fill={color} />}
            </TabBarItem>
            <TabBarItem title={stackTitles.bills} path={tabRoutes.bills}>
                {(color, size) => <BillsIcon width={size} height={size} fill={color} />}
            </TabBarItem>
            <TabBarItem
                title={stackTitles.profile}
                path={tabRoutes.profile}
                variant='circular'
                activeColor='#003465'
                highlightColor='#00284d'
            >
                {(_, size) => <UserIcon width={size} height={size} />}
            </TabBarItem>
            <TabBarItem title={stackTitles.orders} path={tabRoutes.orders}>
                {(color, size) => <OrdersIcon width={size} height={size} fill={color} />}
            </TabBarItem>
            <TabBarItem title={stackTitles.notifications} path={tabRoutes.notifications}>
                {(color, size) => <NotificationsIcon width={size} height={size} fill={color} />}
            </TabBarItem>
        </TabBar>
    );
}

export function MainTabNavigator(): JSX.Element {
    const config = useDefaultTabBarConfig({
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
