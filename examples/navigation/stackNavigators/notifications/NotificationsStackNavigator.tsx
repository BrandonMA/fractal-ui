import React from 'react';
import { StackNavigator, StackScreen } from '../../../../src';
import { tabRoutes } from '../../tabRoutes';
import { BackgroundView } from '../../../components/BackgroundView';

export function NotificationsStackNavigator(): JSX.Element {
    return (
        <StackNavigator path={tabRoutes.notifications}>
            <StackScreen path={tabRoutes.notifications}>
                <BackgroundView />
            </StackScreen>
        </StackNavigator>
    );
}
