import React from 'react';
import List from '../DummyScreens/List';
import { TabNavigator, TabScreen, TabContent, TabBarItem } from '../../src/Navigation';
import { StackNavigatorExample } from '../StackNavigatorExample';
import { Ionicons } from '@expo/vector-icons';

export function TabNavigatorExample(): JSX.Element {
    return (
        <TabNavigator tabBarPosition='bottom'>
            <TabScreen path='/home'>
                <TabContent>
                    <StackNavigatorExample path='/home' />
                </TabContent>
                <TabBarItem title='One'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/secondary'>
                <TabContent>
                    <List />
                </TabContent>
                <TabBarItem title='Two'>{(color, size) => <Ionicons name='ios-home' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/extra'>
                <TabContent>
                    <List />
                </TabContent>
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
                <TabContent>
                    <StackNavigatorExample path='/home' />
                </TabContent>
                <TabBarItem title='One'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/two'>
                <TabContent>
                    <StackNavigatorExample path='/two' />
                </TabContent>
                <TabBarItem title='Two'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
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
                <TabBarItem title='Three'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
            </TabScreen>
            <TabScreen path='/four'>
                <TabContent>
                    <StackNavigatorExample path='/four' />
                </TabContent>
                <TabBarItem title='Four'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
            </TabScreen>
        </TabNavigator>
    );
}
