import React from 'react';
import { MainTabNavigator } from './tabNavigator/MainTabNavigator';
import { NavigationRoot, StackNavigator, StackScreen, StackScreenContent } from '../../../src';
import { Platform, StatusBar, Text, UIManager } from 'react-native';
import { RecoilRoot } from 'recoil';

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
                <StackNavigator path='/'>
                    <StackScreen path='/'>
                        <StackScreenContent>
                            <MainTabNavigator />
                        </StackScreenContent>
                    </StackScreen>
                    <StackScreen path='/extras' stackPresentation='modal'>
                        <StackScreenContent style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Extras</Text>
                        </StackScreenContent>
                    </StackScreen>
                </StackNavigator>
            </NavigationRoot>
        </RecoilRoot>
    );
}
