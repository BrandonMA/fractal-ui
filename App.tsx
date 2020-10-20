import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationBarRightView, NavigationRouter, TabBarItem, TabNavigator, TabScreen, TabScreenContent } from './src';
import { registerRootComponent } from 'expo';
import { BookStackNavigator } from './examples/stackNavigators/BookStackNavigator';
import { HomeStackNavigator } from './examples/stackNavigators/HomeStackNavigator';
import { Ionicons } from '@expo/vector-icons';

enableScreens();

function App(): JSX.Element {
    console.log(NavigationBarRightView);
    return (
        <NavigationRouter>
            <TabNavigator>
                <TabScreen path='/home'>
                    <TabScreenContent>
                        <HomeStackNavigator />
                    </TabScreenContent>
                    <TabBarItem title='Home'>{(color, size) => <Ionicons name='ios-home' size={size} color={color} />}</TabBarItem>
                </TabScreen>
                <TabScreen path='/book'>
                    <TabScreenContent>
                        <BookStackNavigator />
                    </TabScreenContent>
                    <TabBarItem title='Book'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
                </TabScreen>
            </TabNavigator>
        </NavigationRouter>
    );
}

export default registerRootComponent(App);
