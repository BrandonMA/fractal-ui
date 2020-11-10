import React from 'react';
import { BackgroundView } from '../../../../components/BackgroundView';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { CreateAddressContent } from '../../../../components/products/CreateAddressContent';

export function CreateAddressScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <CreateAddressContent />
            </BackgroundView>
        </StackScreenContent>
    );
}
