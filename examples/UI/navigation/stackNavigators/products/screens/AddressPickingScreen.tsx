import React from 'react';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { AddressPicker } from '../../../../components/addresses/AddressPicker';
import { BackgroundScrollView } from '../../../../components/BackgroundScrollView';

export function AddressPickingScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundScrollView>
                <AddressPicker />
            </BackgroundScrollView>
        </StackScreenContent>
    );
}
