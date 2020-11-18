import React from 'react';
import { NavigationBar, StackNavigator, StackScreen } from '../../../../../src';
import { tabRoutes } from '../../tabRoutes';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { stackTitles } from '../../stackTitles';

export function NotificationsStackNavigator(): JSX.Element {
    return (
        <StackNavigator path={tabRoutes.notifications}>
            <StackScreen path={tabRoutes.notifications}>
                <NavigationBar title={stackTitles.notifications} largeTitle />
                <NotificationsScreen />
            </StackScreen>
        </StackNavigator>
    );
}
