import React from 'react';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { View } from 'react-native';
import { BackgroundScrollView } from '../../../../components/BackgroundScrollView';

export function BillsResultsScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundScrollView>
                <View />
            </BackgroundScrollView>
        </StackScreenContent>
    );
}
