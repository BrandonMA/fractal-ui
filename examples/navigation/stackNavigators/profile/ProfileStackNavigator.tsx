import React from 'react';
import { StackNavigator, StackScreen } from '../../../../src';
import { tabRoutes } from '../../tabRoutes';
import { BackgroundView } from '../../../components/BackgroundView';

export function ProfileStackNavigator(): JSX.Element {
    return (
        <StackNavigator path={tabRoutes.profile}>
            <StackScreen path={tabRoutes.profile}>
                <BackgroundView />
            </StackScreen>
        </StackNavigator>
    );
}
