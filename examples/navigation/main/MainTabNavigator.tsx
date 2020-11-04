import React from 'react';
import { TabBar, TabBarItem, TabNavigator, TabScreen, useDefaultTabBarConfig } from '../../../src';
import { HomeStackNavigator } from '../home/HomeStackNavigator';
import { Foundation } from '@expo/vector-icons';

function MainTabBar(): JSX.Element {
    return (
        <TabBar>
            <TabBarItem title='Dashboard' path='/dashboard'>
                {(color, size) => <Foundation name='home' size={size} color={color} />}
            </TabBarItem>
            <TabBarItem variant='circular' title='Home' path='/home' activeColor='#1281FF'>
                {(color, size) => <Foundation name='home' size={size} color={color} />}
            </TabBarItem>
            <TabBarItem title='Notifications' path='/notifications'>
                {(color, size) => <Foundation name='home' size={size} color={color} />}
            </TabBarItem>
        </TabBar>
    );
}

export function MainTabNavigator(): JSX.Element {
    const config = useDefaultTabBarConfig({
        tabBarVariant: 'middle-action'
    });

    return (
        <TabNavigator defaultRoute='/home' tabBar={<MainTabBar />} tabBarConfig={config}>
            <TabScreen path='/home'>
                <HomeStackNavigator />
            </TabScreen>
        </TabNavigator>
    );
}
