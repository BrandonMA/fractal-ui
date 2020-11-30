import React from 'react';
import { MainTabNavigator } from './tabNavigator/MainTabNavigator';
import { NavigationRoot } from '../../../src';
import { Platform, StatusBar, UIManager } from 'react-native';
import { RecoilRoot } from 'recoil';
import { enableMapSet } from 'immer';

enableMapSet();

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export function Root(): JSX.Element {
    return (
        <RecoilRoot>
            {Platform.OS === 'ios' ? <StatusBar barStyle='dark-content' /> : <StatusBar barStyle='default' />}
            <NavigationRoot>
                <MainTabNavigator />
            </NavigationRoot>
        </RecoilRoot>
    );
}
