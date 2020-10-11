import React from 'react';
import List from '../DummyScreens/List';
import { TabNavigator, TabScreen, TabScreenContent, TabBarItem } from '../../src/Navigation';
import { StackNavigatorExample } from '../StackNavigatorExample';
import { Ionicons } from '@expo/vector-icons';

export function TabNavigatorExample(): JSX.Element {
    return (
        <TabNavigator tabBarPosition='bottom'>
            <TabScreen path='/home'>
                <TabScreenContent>
                    <StackNavigatorExample path='/home' />
                </TabScreenContent>
                <TabBarItem title='One'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/secondary'>
                <TabScreenContent>
                    <List />
                </TabScreenContent>
                <TabBarItem title='Two'>{(color, size) => <Ionicons name='ios-home' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/extra'>
                <TabScreenContent>
                    <List />
                </TabScreenContent>
                <TabBarItem activeColor='#FF9900' title='Three'>
                    {(color, size) => <Ionicons name='ios-albums' size={size} color={color} />}
                </TabBarItem>
            </TabScreen>
        </TabNavigator>
    );
}

export function MiddleActionTabNavigatorExample(): JSX.Element {
    return (
        <TabNavigator variant='middle-action' tabBarPosition='bottom'>
            <TabScreen path='/home'>
                <TabScreenContent>
                    <StackNavigatorExample path='/home' />
                </TabScreenContent>
                <TabBarItem title='One'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/two'>
                <TabScreenContent>
                    <StackNavigatorExample path='/two' />
                </TabScreenContent>
                <TabBarItem title='Two'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/secondary'>
                <TabScreenContent>
                    <List />
                </TabScreenContent>
                <TabBarItem activeColor='#0FD630' title='Home' variant='circular'>
                    {(color, size) => <Ionicons name='ios-home' size={size} color={color} />}
                </TabBarItem>
            </TabScreen>
            <TabScreen path='/extra'>
                <TabScreenContent>
                    <List />
                </TabScreenContent>
                <TabBarItem title='Three'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/four'>
                <TabScreenContent>
                    <StackNavigatorExample path='/four' />
                </TabScreenContent>
                <TabBarItem title='Four'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
            </TabScreen>
        </TabNavigator>
    );
}
