import React from 'react';
import { NavigationBar, StackNavigator, StackScreen } from '../../../../src';
import { tabRoutes } from '../../tabRoutes';
import { BackgroundView } from '../../../components/BackgroundView';
import { stackTitles } from '../../stackTitles';

export function BillsStackNavigator(): JSX.Element {
    return (
        <StackNavigator path={tabRoutes.bills}>
            <StackScreen path={tabRoutes.bills}>
                <NavigationBar title={stackTitles.bills} largeTitle />
                <BackgroundView />
            </StackScreen>
        </StackNavigator>
    );
}
