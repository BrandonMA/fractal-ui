import React from 'react';
import { BackgroundView } from '../../../../components/BackgroundView';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { CheckoutItemsList } from '../../../../components/products/CheckoutItemsList';
import { CheckoutZone } from '../../../../components/products/CheckoutZone';

export function CheckoutScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <CheckoutItemsList />
                <CheckoutZone />
            </BackgroundView>
        </StackScreenContent>
    );
}
