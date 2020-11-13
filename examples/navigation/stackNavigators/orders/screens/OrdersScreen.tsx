import React from 'react';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { mockOrders } from '../../../../data';
import { OrdersList } from '../../../../components/orders/OrdersList';

export function OrdersScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <OrdersList orders={mockOrders} />
        </StackScreenContent>
    );
}
