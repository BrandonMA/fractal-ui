import React from 'react';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { ProfileFields } from '../../../../components/profile/ProfileFields';
import styled from 'styled-components/native';
import { SafeAreaFullScreenScrollView } from '../../../../../src/Layout/components';

const BackgroundView = styled(SafeAreaFullScreenScrollView)`
    background-color: #f2f2f2;
`;

export function ProfileScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <ProfileFields />
            </BackgroundView>
        </StackScreenContent>
    );
}
