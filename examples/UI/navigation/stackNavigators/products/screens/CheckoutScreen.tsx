import React from 'react';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { CheckoutItemsList } from '../../../../components/products/CheckoutItemsList';

export function CheckoutScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <CheckoutItemsList />
        </StackScreenContent>
    );
}
