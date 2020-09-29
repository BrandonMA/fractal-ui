import React from 'react';
import List from '../DummyScreens/List';
import { TabNavigator, TabScreen, TabContent, TabBarItem } from '../../src/Navigation';
import { StackNavigatorExample } from '../StackNavigatorExample';
import { Ionicons } from '@expo/vector-icons';

export function TabNavigatorExample(): JSX.Element {
    return (
        <TabNavigator position='bottom'>
            <TabScreen path='/home'>
                <TabContent>
                    <StackNavigatorExample path='/home' />
                </TabContent>
                <TabBarItem title='Home'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/secondary'>
                <TabContent>
                    <List />
                </TabContent>
                <TabBarItem title='Home'>{(color, size) => <Ionicons name='ios-home' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/extra'>
                <TabContent>
                    <List />
                </TabContent>
                <TabBarItem activeColor='#FF9900' title='Home'>
                    {(color, size) => <Ionicons name='ios-albums' size={size} color={color} />}
                </TabBarItem>
            </TabScreen>
        </TabNavigator>
    );
}

export function MiddleActionTabNavigatorExample(): JSX.Element {
    return (
        <TabNavigator variant='middle-action' position='bottom'>
            <TabScreen path='/home'>
                <TabContent>
                    <StackNavigatorExample path='/home' />
                </TabContent>
                <TabBarItem title='Home'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/secondary'>
                <TabContent>
                    <List />
                </TabContent>
                <TabBarItem activeColor='#0FD630' title='Home' variant='circular'>
                    {(color, size) => <Ionicons name='ios-home' size={size} color={color} />}
                </TabBarItem>
            </TabScreen>
            <TabScreen path='/extra'>
                <TabContent>
                    <List />
                </TabContent>
                <TabBarItem activeColor='#FF9900' title='Home'>
                    {(color, size) => <Ionicons name='ios-albums' size={size} color={color} />}
                </TabBarItem>
            </TabScreen>
        </TabNavigator>
    );
}
