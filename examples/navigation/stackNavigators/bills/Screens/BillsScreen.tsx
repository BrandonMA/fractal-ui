import React from 'react';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { BillsScreenContent } from '../../../../components/bills/BillsScreenContent';
import styled from 'styled-components/native';
import { SafeAreaFullScreenScrollView } from '../../../../../src/Layout/components';

export const BackgroundView = styled(SafeAreaFullScreenScrollView)`
    background-color: #f2f2f2;
`;

export function BillsScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <BillsScreenContent />
            </BackgroundView>
        </StackScreenContent>
    );
}
