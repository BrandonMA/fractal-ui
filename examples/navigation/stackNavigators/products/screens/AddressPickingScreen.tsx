import React from 'react';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { AddressPicker } from '../../../../components/products/AddressPicker';
import styled from 'styled-components/native';
import { SafeAreaFullScreenScrollView } from '../../../../../src/Layout/components';

const BackgroundView = styled(SafeAreaFullScreenScrollView)`
    background-color: #f2f2f2;
`;

export function AddressPickingScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <AddressPicker />
            </BackgroundView>
        </StackScreenContent>
    );
}
