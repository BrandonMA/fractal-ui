import React from 'react';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import styled from 'styled-components/native';
import { SafeAreaFullScreen } from '../../../../../src/Layout/components';
import { View } from 'react-native';

export const BackgroundView = styled(SafeAreaFullScreen)`
    background-color: #f6f6f6;
`;

export function BillsResultsScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <View />
            </BackgroundView>
        </StackScreenContent>
    );
}
