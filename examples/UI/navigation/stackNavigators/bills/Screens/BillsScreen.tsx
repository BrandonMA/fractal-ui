import React from 'react';
import { StackScreenContent } from '../../../../../../src/Navigation/components/StackNavigation';
import { BillsScreenContent } from '../../../../components/bills/BillsScreenContent';
import { BackgroundScrollView } from '../../../../components/BackgroundScrollView';

export function BillsScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <BackgroundScrollView>
                <BillsScreenContent />
            </BackgroundScrollView>
        </StackScreenContent>
    );
}
