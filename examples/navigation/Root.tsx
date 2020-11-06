import React from 'react';
import { MainTabNavigator } from './main/MainTabNavigator';
import { NavigationRoot } from '../../src';
import { Platform, StatusBar, UIManager } from 'react-native';
import { RecoilRoot } from 'recoil';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export function Root(): JSX.Element {
    return (
        <RecoilRoot>
            <NavigationRoot>
                <StatusBar barStyle='dark-content' />
                <MainTabNavigator />
            </NavigationRoot>
        </RecoilRoot>
    );
}
