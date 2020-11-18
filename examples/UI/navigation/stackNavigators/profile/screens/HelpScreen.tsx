import React from 'react';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { HelpContent } from '../../../../components/profile/HelpContent';
import { BackgroundScrollView } from '../../../../components/BackgroundScrollView';

export function HelpScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundScrollView>
                <HelpContent />
            </BackgroundScrollView>
        </StackScreenContent>
    );
}
