import React from 'react';
import { BackgroundView } from '../../../../components/BackgroundView';
import { StackScreenContent } from '../../../../../src/Navigation/components/StackNavigation';
import { ProfileFields } from '../../../../components/profile/ProfileFields';
import { ScrollView } from 'react-native';

export function ProfileScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundView>
                <ScrollView>
                    <ProfileFields />
                </ScrollView>
            </BackgroundView>
        </StackScreenContent>
    );
}
