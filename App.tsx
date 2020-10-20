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
    useTabBarConfig,
    useHistory,
    NavigationBarRightView
} from './src';
import { registerRootComponent } from 'expo';
import { Ionicons } from '@expo/vector-icons';

enableScreens();

function ToggleTabBar(): JSX.Element {
    const { config, setConfig } = useTabBarConfig();
    const toggleBar = useCallback(() => {
        const { tabBarHidden, ...others } = config;
        setConfig({
            ...others,
            tabBarHidden: !tabBarHidden
        });
    }, [config, setConfig]);

    return (
        <Pressable onPress={toggleBar}>
            <Text>Toggle</Text>
        </Pressable>
    );
}

function Home(): JSX.Element {
    const history = useHistory();
    const goToSettings = useCallback(() => history.push('/home/settings'), []);
    const goToProfile = useCallback(() => history.push('/profile'), []);

    return (
        <>
            <NavigationBar hidden={false} title='Home' />
            <StackScreenContent>
                <SafeAreaFullScreen>
                    <Pressable onPress={goToSettings}>
                        <Text>Settings</Text>
                    </Pressable>
                    <Pressable onPress={goToProfile}>
                        <Text>Profile</Text>
                    </Pressable>
                    <ToggleTabBar />
                </SafeAreaFullScreen>
            </StackScreenContent>
        </>
    );
}

function Settings(): JSX.Element {
    return (
        <>
            <NavigationBar hidden={false} title='Settings' backgroundColor='#222222' />
            <StackScreenContent>
                <SafeAreaFullScreen>
                    <Text>Settings</Text>
                </SafeAreaFullScreen>
            </StackScreenContent>
        </>
    );
}

function App(): JSX.Element {
    console.log(NavigationBarRightView);
    return (
        <NavigationRouter>
            <StackNavigator path='/'>
                <StackScreen path=''>
                    <StackScreenContent>
                        <TabNavigator>
                            <TabScreen path='/home'>
                                <TabScreenContent>
                                    <StackNavigator path='/home'>
                                        <StackScreen path='/home'>
                                            <Home />
                                        </StackScreen>
                                        <StackScreen path='/home/settings' style={{ backgroundColor: 'white' }}>
                                            <Settings />
                                        </StackScreen>
                                    </StackNavigator>
                                </TabScreenContent>
                                <TabBarItem title='Home'>
                                    {(color, size) => <Ionicons name='ios-home' size={size} color={color} />}
                                </TabBarItem>
                            </TabScreen>
                            <TabScreen path='/book'>
                                <TabScreenContent>
                                    <StackNavigator path='/book'>
                                        <StackScreen path='/book'>
                                            <NavigationBar hidden={false} title='Book'>
                                                <NavigationBarRightView>
                                                    <Text>Right</Text>
                                                </NavigationBarRightView>
                                            </NavigationBar>
                                            <StackScreenContent>
                                                <SafeAreaFullScreen>
                                                    <Text>Book</Text>
                                                </SafeAreaFullScreen>
                                            </StackScreenContent>
                                        </StackScreen>
                                    </StackNavigator>
                                </TabScreenContent>
                                <TabBarItem title='Book'>
                                    {(color, size) => <Ionicons name='ios-book' size={size} color={color} />}
                                </TabBarItem>
                            </TabScreen>
                        </TabNavigator>
                    </StackScreenContent>
                </StackScreen>
                <StackScreen path='/profile' style={{ backgroundColor: 'white' }} stackPresentation='modal'>
                    <NavigationBar hidden={false} title='Profile' />
                    <StackScreenContent>
                        <SafeAreaFullScreen>
                            <Text>Welcome to the profile page</Text>
                        </SafeAreaFullScreen>
                    </StackScreenContent>
                </StackScreen>
            </StackNavigator>
        </NavigationRouter>
    );
}

export default registerRootComponent(App);
