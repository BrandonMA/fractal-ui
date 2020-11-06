import React from 'react';
import { StackNavigator, StackScreen } from '../../../../src';
import { tabRoutes } from '../../tabRoutes';
import { BackgroundView } from '../../../components/BackgroundView';

export function OrdersStackNavigator(): JSX.Element {
    return (
        <StackNavigator path={tabRoutes.orders}>
            <StackScreen path={tabRoutes.orders}>
                <BackgroundView />
            </StackScreen>
        </StackNavigator>
    );
}
