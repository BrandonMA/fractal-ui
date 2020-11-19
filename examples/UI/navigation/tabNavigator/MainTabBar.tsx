import React, { useCallback } from 'react';
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
    const renderProductsIcon = useCallback((color, size) => <ProductsIcon width={size} height={size} fill={color} />, []);
    const renderBillsIcon = useCallback((color, size) => <BillsIcon width={size} height={size} fill={color} />, []);
    const renderUserIcon = useCallback((_, size) => <UserIcon width={size} height={size} />, []);
    const renderOrdersIcon = useCallback((color, size) => <OrdersIcon width={size} height={size} fill={color} />, []);
    const renderNotificationsIcon = useCallback((color, size) => <NotificationsIcon width={size} height={size} fill={color} />, []);

    return (
        <TabBar>
            <TabBarItem title={stackTitles.products} path={tabRoutes.products}>
                {renderProductsIcon}
            </TabBarItem>
            <TabBarItem title={stackTitles.bills} path={tabRoutes.bills}>
                {renderBillsIcon}
            </TabBarItem>
            <TabBarItem
                title={stackTitles.profile}
                path={tabRoutes.profile}
                variant='circular'
                activeColor='#003465'
                highlightColor='#00284d'
            >
                {renderUserIcon}
            </TabBarItem>
            <TabBarItem title={stackTitles.orders} path={tabRoutes.orders}>
                {renderOrdersIcon}
            </TabBarItem>
            <TabBarItem title={stackTitles.notifications} path={tabRoutes.notifications}>
                {renderNotificationsIcon}
            </TabBarItem>
        </TabBar>
    );
}
