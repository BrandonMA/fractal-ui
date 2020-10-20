import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationRouter, TabBar, TabBarItem, TabNavigator, TabScreen } from './src';
import { registerRootComponent } from 'expo';
import { BookStackNavigator } from './examples/stackNavigators/BookStackNavigator';
import { HomeStackNavigator } from './examples/stackNavigators/HomeStackNavigator';
import { Ionicons } from '@expo/vector-icons';
import { useDefaultTabBarConfig } from './src/Navigation/components/TabNavigation/TabBar/hooks/useDefaultTabBarConfig';

enableScreens();

const basePaths = {
    home: '/home',
    book: '/book'
};

function App(): JSX.Element {
    const defaultTabBarConfig = useDefaultTabBarConfig();

    return (
        <NavigationRouter>
            <TabNavigator
                defaultRoute={basePaths.home}
                tabBarConfig={defaultTabBarConfig}
                tabBar={
                    <TabBar>
                        <TabBarItem path={basePaths.home} title='Home'>
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
                <TabScreen path={basePaths.book}>
                    <BookStackNavigator />
                </TabScreen>
            </TabNavigator>
        </NavigationRouter>
    );
}

export default registerRootComponent(App);
