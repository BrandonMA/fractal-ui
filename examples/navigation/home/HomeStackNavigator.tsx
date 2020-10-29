import React from 'react';
import { StackNavigator, StackScreen } from '../../../src';
import { MainScreen } from './screens/MainScreen';
import { SettingsScreen } from './screens/SettingsScreen';

export function HomeStackNavigator(): JSX.Element {
    return (
        <StackNavigator path='/home'>
            <StackScreen path='/home'>
                <MainScreen />
            </StackScreen>
            <StackScreen path='/home/settings' stackPresentation='modal'>
                <SettingsScreen />
            </StackScreen>
        </StackNavigator>
    );
}
