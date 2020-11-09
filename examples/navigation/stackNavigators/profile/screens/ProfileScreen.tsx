import React from 'react';
import { BackgroundView } from '../../../../components/BackgroundView';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { ProfileFields } from '../../../../components/profile/ProfileFields';

export function ProfileScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <ProfileFields />
            </BackgroundView>
        </StackScreenContent>
    );
}
