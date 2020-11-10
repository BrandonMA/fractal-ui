import React from 'react';
import { BackgroundView } from '../../../../components/BackgroundView';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { mockOrders } from '../../../../data';
import { OrdersList } from '../../../../components/orders/OrdersList';

export function OrdersScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <OrdersList orders={mockOrders} />
            </BackgroundView>
        </StackScreenContent>
    );
}
