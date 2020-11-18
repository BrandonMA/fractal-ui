import React from 'react';
import { TabBar } from '../../../../src/Navigation/components/TabNavigation/TabBar';
import { TabBarItem } from '../../../../src/Navigation/components/TabNavigation/TabBarItem';
import { stackTitles } from '../stackTitles';
import { tabRoutes } from '../tabRoutes';
import { ProductsIcon } from '../../icons/ProductsIcon';
import { BillsIcon } from '../../icons/BillsIcon';
import { UserIcon } from '../../icons/UserIcon';
import { OrdersIcon } from '../../icons/OrdersIcon';
import { NotificationsIcon } from '../../icons/NotificationsIcon';

export function MainTabBar(): JSX.Element {
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
