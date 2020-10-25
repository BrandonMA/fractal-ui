import React from 'react';
import { enableScreens } from 'react-native-screens';
import {
    NavigationRoot,
    StackNavigator,
    StackScreen,
    StackScreenContent,
    TabBar,
    TabBarItem,
    TabNavigator,
    TabScreen,
    useDefaultTabBarConfig
} from './src';
import { registerRootComponent } from 'expo';
import { BookStackNavigator } from './examples/stackNavigators/BookStackNavigator';
import { HomeStackNavigator } from './examples/stackNavigators/HomeStackNavigator';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

enableScreens();

const basePaths = {
    home: '/home',
    types: '/types',
    book: '/book'
};

function App(): JSX.Element {
    const defaultTabBarConfig = useDefaultTabBarConfig({
        tabBarVariant: 'middle-action'
    });

    return (
        <NavigationRoot>
            <StackNavigator>
                <StackScreen>
                    <TabNavigator
                        defaultRoute={basePaths.home}
                        tabBarConfig={defaultTabBarConfig}
                        tabBar={
                            <TabBar>
                                <TabBarItem path={basePaths.home} title='Home'>
                                    {(color, size) => <Ionicons name='ios-home' size={size} color={color} />}
                                </TabBarItem>
                                <TabBarItem path={basePaths.types} activeColor='#0FD630' title='Home' variant='circular'>
                                    {(color, size) => <Ionicons name='ios-home' size={size} color={color} />}
                                </TabBarItem>
                                <TabBarItem path={basePaths.book} title='Book'>
                                    {(color, size) => <Ionicons name='ios-book' size={size} color={color} />}
                                </TabBarItem>
                            </TabBar>
                        }
                    >
                        <TabScreen path={basePaths.home}>
                            <HomeStackNavigator />
                        </TabScreen>
                        <TabScreen path={basePaths.types}>
                            <HomeStackNavigator />
                        </TabScreen>
                        <TabScreen path={basePaths.book}>
                            <BookStackNavigator />
                        </TabScreen>
                    </TabNavigator>
                </StackScreen>
                <StackScreen path='/profile' stackPresentation='modal'>
                    <StackScreenContent>
                        <Text>Profile</Text>
                    </StackScreenContent>
                </StackScreen>
            </StackNavigator>
        </NavigationRoot>
    );
}

export default registerRootComponent(App);
