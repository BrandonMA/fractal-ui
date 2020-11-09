import React from 'react';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import styled from 'styled-components/native';
import { HelpContent } from '../../../../components/profile/HelpContent';
import { SafeAreaFullScreenScrollView } from '../../../../../src/Layout/components';

export const BackgroundView = styled(SafeAreaFullScreenScrollView)`
    background-color: #f6f6f6;
`;

export function HelpScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <HelpContent />
            </BackgroundView>
        </StackScreenContent>
    );
}
