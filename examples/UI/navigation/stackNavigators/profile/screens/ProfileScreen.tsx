import React from 'react';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { ProfileFields } from '../../../../components/profile/ProfileFields';
import { BackgroundScrollView } from '../../../../components/BackgroundScrollView';

export function ProfileScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundScrollView>
                <ProfileFields />
            </BackgroundScrollView>
        </StackScreenContent>
    );
}
