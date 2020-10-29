import React from 'react';
import { TabBar, TabBarItem, TabNavigator, TabScreen, useDefaultTabBarConfig } from '../../../src';
import { HomeStackNavigator } from '../home/HomeStackNavigator';
import { Foundation } from '@expo/vector-icons';

function MainTabBar(): JSX.Element {
    return (
        <TabBar>
            <TabBarItem title='Home' path='/home'>
                {(color, size) => <Foundation name='home' size={size} color={color} />}
            </TabBarItem>
        </TabBar>
    );
}

export function MainTabNavigator(): JSX.Element {
    const config = useDefaultTabBarConfig();
    return (
        <TabNavigator defaultRoute='/home' tabBar={<MainTabBar />} tabBarConfig={config}>
            <TabScreen path='/home'>
                <HomeStackNavigator />
            </TabScreen>
        </TabNavigator>
    );
}
