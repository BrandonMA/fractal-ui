import React from 'react';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { OrdersList } from '../../../../components/orders/OrdersList';
import { useOrders } from '../../../../../BusinessLogic/hooks/orders/useOrders';

export function OrdersScreen(): JSX.Element {
    const orders = useOrders();
    return (
        <StackScreenContent>
            <OrdersList orders={orders} />
        </StackScreenContent>
    );
}
