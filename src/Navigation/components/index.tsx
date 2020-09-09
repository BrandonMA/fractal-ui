import React from 'react';
import { TabItem } from './TabItem';
import { TabNavigator } from './TabNavigator';
import { TabScreen } from './TabScreen';
import { One } from '../../List';
import { TabScreenContent } from './TabScreenContent';

export function AppExample(): JSX.Element {
    return (
        <TabNavigator>
            <TabScreen path='/one'>
                <TabScreenContent>
                    <One />
                </TabScreenContent>
                <TabItem activeColor='#0000ff' inactiveColor='#999999' title='Home' />
            </TabScreen>
            <TabScreen path='/two'>
                <TabScreenContent>
                    <One />
                </TabScreenContent>
                <TabItem activeColor='#0000ff' inactiveColor='#999999' title='Secondary' />
            </TabScreen>
        </TabNavigator>
    );
}
