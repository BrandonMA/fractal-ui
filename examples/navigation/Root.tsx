import React from 'react';
import { MainTabNavigator } from './main/MainTabNavigator';
import { NavigationRoot } from '../../src';

export function Root(): JSX.Element {
    return (
        <NavigationRoot>
            <MainTabNavigator />
        </NavigationRoot>
    );
}
