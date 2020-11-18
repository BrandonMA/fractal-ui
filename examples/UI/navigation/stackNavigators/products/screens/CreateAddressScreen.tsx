import React from 'react';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { CreateAddressContent } from '../../../../components/addresses/CreateAddressContent';

export function CreateAddressScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <CreateAddressContent />
        </StackScreenContent>
    );
}
