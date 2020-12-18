import React, { useCallback } from 'react';
import { registerRootComponent } from 'expo';
import { FractalAppRoot } from './src/FractalAppRoot';
import { defaultTheme } from './src/ThemeState/recoil/atoms/fractalThemeSetAtom';
import { useSetRecoilState } from 'recoil';
import { currentThemeIdentifierAtom } from './src/ThemeState/recoil/atoms/currentThemeIdentifierAtom';
import { BaseButton } from './src/ThemeState/components/Interactive/BaseButton';
import {
    black,
    green,
    orange,
    SafeAreaFullScreen,
    StackNavigator,
    StackScreen,
    StackScreenContent,
    TabBar,
    TabBarItem,
    TabNavigator,
    TabScreen
} from './src';
import { FractalThemeSet } from './src/ThemeState/types/FractalThemeSet';
import { BaseContainer } from './src/ThemeState/components/Containers/BaseContainer';
import { BaseBackground } from './src/ThemeState/components/Containers/BaseBackground';
import { Entypo } from '@expo/vector-icons';
import { BaseText } from './src/ThemeState/components/Text/BaseText';
import { useHistory } from './src';

const newThemeSet: FractalThemeSet = {
    default: {
        ...defaultTheme,
        mainInteractiveColor: green
    },
    darkMode: {
        ...defaultTheme,
        mainInteractiveColor: orange,
        navigationBarColor: black,
        textColor: black,
        containerColor: black,
        tabBarColor: black
    }
};

function ThemeSwapper(): JSX.Element {
    const setCurrentThemeIdentifier = useSetRecoilState(currentThemeIdentifierAtom);
    const history = useHistory();

    const callback = useCallback(() => {
        setCurrentThemeIdentifier((current) => (current === 'default' ? 'darkMode' : 'default'));
        history.push('/home/profile');
    }, [setCurrentThemeIdentifier]);

    return <BaseButton colorStyle='mainInteractiveColor' onPress={callback} text='Prueba' removeShadow />;
}

function App(): JSX.Element {
    return (
        <FractalAppRoot themeSet={newThemeSet}>
            <TabNavigator
                defaultRoute='/home'
                tabBar={
                    <TabBar tabBarVariant='basic' tabBarPosition='bottom'>
                        <TabBarItem title='Home' path='/home'>
                            {(color, size) => <Entypo name='home' size={size} color={color} />}
                        </TabBarItem>
                    </TabBar>
                }
            >
                <TabScreen path='/home'>
                    <StackNavigator path='/home'>
                        <StackScreen
                            path='/home'
                            navBarConfig={{
                                title: 'Home'
                            }}
                        >
                            <StackScreenContent>
                                <BaseBackground>
                                    <SafeAreaFullScreen>
                                        <BaseContainer>
                                            <ThemeSwapper />
                                        </BaseContainer>
                                    </SafeAreaFullScreen>
                                </BaseBackground>
                            </StackScreenContent>
                        </StackScreen>
                        <StackScreen
                            path='/home/profile'
                            stackPresentation='modal'
                            navBarConfig={{
                                title: 'Modal'
                            }}
                        >
                            <StackScreenContent>
                                <BaseBackground>
                                    <BaseText textSize='md'>This is a modal</BaseText>
                                </BaseBackground>
                            </StackScreenContent>
                        </StackScreen>
                    </StackNavigator>
                </TabScreen>
            </TabNavigator>
        </FractalAppRoot>
    );
}

export default registerRootComponent(App);
