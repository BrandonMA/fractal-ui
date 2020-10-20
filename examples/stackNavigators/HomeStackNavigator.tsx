import { StackNavigator, StackScreen } from '../../src';
import { Home } from '../components/Home';
import { Settings } from '../components/Settings';
import React from 'react';

export function HomeStackNavigator(): JSX.Element {
    return (
        <StackNavigator path='/home'>
            <StackScreen path=''>
                <Home />
            </StackScreen>
            <StackScreen path='/home/settings'>
                <Settings />
            </StackScreen>
        </StackNavigator>
    );
}
