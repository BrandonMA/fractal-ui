import React from 'react';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { OrdersList } from '../../../../components/orders/OrdersList';
import { mockOrders } from '../../../../data/mockOrders';

export function OrdersScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <OrdersList orders={mockOrders} />
        </StackScreenContent>
    );
}
