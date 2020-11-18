import React from 'react';
import { NavigationBar, StackNavigator, StackScreen } from '../../../../../src';
import { tabRoutes } from '../../tabRoutes';
import { stackTitles } from '../../stackTitles';
import { BillsScreen } from './Screens/BillsScreen';
import { BillsResultsScreen } from './Screens/BillsResultsScreen';

export function BillsStackNavigator(): JSX.Element {
    return (
        <StackNavigator path={tabRoutes.bills}>
            <StackScreen path={tabRoutes.bills}>
                <NavigationBar title={stackTitles.bills} largeTitle />
                <BillsScreen />
            </StackScreen>
            <StackScreen path={tabRoutes.filteredBills}>
                <NavigationBar title={stackTitles.filteredBills} largeTitle={false} />
                <BillsResultsScreen />
            </StackScreen>
        </StackNavigator>
    );
}
