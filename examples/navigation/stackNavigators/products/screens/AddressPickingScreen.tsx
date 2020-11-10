import React from 'react';
import { BackgroundView } from '../../../../components/BackgroundView';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { AddressPicker } from '../../../../components/products/AddressPicker';

export function AddressPickingScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <AddressPicker />
            </BackgroundView>
        </StackScreenContent>
    );
}
