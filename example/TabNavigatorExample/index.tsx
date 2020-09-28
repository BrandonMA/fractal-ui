import React from 'react';
import List from '../DummyScreens/List';
import { TabNavigator, TabScreen, TabContent, TabBarItem } from '../../src/Navigation';
import { StackNavigatorExample } from '../StackNavigatorExample';

export function TabNavigatorExample(): JSX.Element {
    return (
        <TabNavigator>
            <TabScreen path='/home'>
                <TabContent>
                    <StackNavigatorExample path='/home' />
                </TabContent>
                <TabBarItem activeColor='#1281FF' inactiveColor='#999999' title='Home' />
            </TabScreen>
            <TabScreen path='/secondary'>
                <TabContent>
                    <List />
                </TabContent>
                <TabBarItem activeColor='#FF9900' inactiveColor='#999999' title='Secondary' />
            </TabScreen>
            <TabScreen path='/extra'>
                <TabContent>
                    <List />
                </TabContent>
                <TabBarItem activeColor='#FF9900' inactiveColor='#999999' title='Extra' />
            </TabScreen>
        </TabNavigator>
    );
}

export function MiddleActionTabNavigatorExample(): JSX.Element {
    return (
        <TabNavigator variant='middle-action'>
            <TabScreen path='/home'>
                <TabContent>
                    <StackNavigatorExample path='/home' />
                </TabContent>
                <TabBarItem activeColor='#1281FF' inactiveColor='#999999' title='Home' />
            </TabScreen>
            <TabScreen path='/secondary'>
                <TabContent>
                    <List />
                </TabContent>
                <TabBarItem activeColor='#FF9900' inactiveColor='#999999' title='Secondary' variant='circular' />
            </TabScreen>
            <TabScreen path='/extra'>
                <TabContent>
                    <List />
                </TabContent>
                <TabBarItem activeColor='#FF9900' inactiveColor='#999999' title='Extra' />
            </TabScreen>
        </TabNavigator>
    );
}
