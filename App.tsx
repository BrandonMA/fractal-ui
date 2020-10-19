import React, { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import { enableScreens } from 'react-native-screens';
import {
    StackNavigator,
    StackScreen,
    NavigationBar,
    NavigationRouter,
    SafeAreaFullScreen,
    StackScreenContent,
    TabNavigator,
    TabScreen,
    TabScreenContent,
    TabBarItem,
    useTabBarConfig
} from './src';
import { registerRootComponent } from 'expo';
import { Ionicons } from '@expo/vector-icons';

enableScreens();

function ToggleTabBar(): JSX.Element {
    const { config, setConfig } = useTabBarConfig();
    const toggleBar = useCallback(() => {
        const { hidden, ...others } = config;
        setConfig({
            ...others,
            hidden: !hidden
        });
    }, [config, setConfig]);

    return (
        <Pressable onPress={toggleBar}>
            <Text>Toggle</Text>
        </Pressable>
    );
}

function App(): JSX.Element {
    return (
        <NavigationRouter>
            <TabNavigator tabBarPosition='bottom'>
                <TabScreen path='/home'>
                    <TabScreenContent>
                        <StackNavigator path='/home'>
                            <StackScreen path='/home'>
                                <NavigationBar hidden={false} title='Home' />
                                <StackScreenContent>
                                    <SafeAreaFullScreen>
                                        <Text>Home</Text>
                                        <ToggleTabBar />
                                    </SafeAreaFullScreen>
                                </StackScreenContent>
                            </StackScreen>
                        </StackNavigator>
                    </TabScreenContent>
                    <TabBarItem title='Home'>{(color, size) => <Ionicons name='ios-home' size={size} color={color} />}</TabBarItem>
                </TabScreen>
                <TabScreen path='/book'>
                    <TabScreenContent>
                        <Text>Book</Text>
                    </TabScreenContent>
                    <TabBarItem title='Book'>{(color, size) => <Ionicons name='ios-book' size={size} color={color} />}</TabBarItem>
                </TabScreen>
            </TabNavigator>
        </NavigationRouter>
    );
}

export default registerRootComponent(App);
