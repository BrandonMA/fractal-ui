import React from 'react';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { BillsScreenContent } from '../../../../components/bills/BillsScreenContent';
import styled from 'styled-components/native';
import { SafeAreaFullScreen } from '../../../../../src/Layout/components';

export const BackgroundView = styled(SafeAreaFullScreen)`
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
