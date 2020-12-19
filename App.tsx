import React, { memo, useCallback, useMemo } from 'react';
import { registerRootComponent } from 'expo';
import { FractalAppRoot } from './src/FractalAppRoot';
import { defaultTheme } from './src/ThemeState/recoil/atoms/fractalThemeSetAtom';
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
import { PlarformBarConfig } from './src/Navigation/components/StackNavigation/PlarformBarConfig';
import { BaseTextButton } from './src/ThemeState/components/Interactive/BaseTextButton';
import { PlatformBarRightView } from './src/Navigation/components/StackNavigation/PlatformBarViews';

const newThemeSet: FractalThemeSet = {
    default: {
        ...defaultTheme,
        mainInteractiveColor: green
    },
    dark: {
        ...defaultTheme,
        mainInteractiveColor: orange,
        navigationBarColor: black,
        textColor: black,
        containerColor: black,
        tabBarColor: black
    }
};

function HomeContent(): JSX.Element {
    const history = useHistory();

    const callback = useCallback(() => {
        history.push('/home/profile');
    }, [history]);

    return <BaseButton colorStyle='mainInteractiveColor' onPress={callback} text='Prueba' removeShadow />;
}

const MemoizedHomeIcon = memo(Entypo);

function MainTabBar(): JSX.Element {
    const renderHomeItem = useMemo(
        () => (color: string, size: number): JSX.Element => <MemoizedHomeIcon name='home' size={size} color={color} />,
        []
    );
    return (
        <TabBar tabBarVariant='middle-action' tabBarPosition='bottom'>
            <TabBarItem title='Home' path='/home'>
                {renderHomeItem}
            </TabBarItem>
            <TabBarItem title='Middle' path='/middle' variant='circular'>
                {renderHomeItem}
            </TabBarItem>
            <TabBarItem title='Home 3' path='/two'>
                {renderHomeItem}
            </TabBarItem>
        </TabBar>
    );
}

function App(): JSX.Element {
    return (
        <FractalAppRoot themeSet={newThemeSet}>
            <TabNavigator defaultRoute='/home' tabBar={<MainTabBar />}>
                <TabScreen path='/home'>
                    <StackNavigator path='/home'>
                        <StackScreen path='/home' navBarConfig={<PlarformBarConfig title='Home' />}>
                            <StackScreenContent>
                                <BaseBackground>
                                    <SafeAreaFullScreen>
                                        <BaseContainer>
                                            <HomeContent />
                                        </BaseContainer>
                                    </SafeAreaFullScreen>
                                </BaseBackground>
                            </StackScreenContent>
                        </StackScreen>
                        <StackScreen
                            path='/home/profile'
                            stackPresentation='modal'
                            navBarConfig={
                                <PlarformBarConfig title='Modal'>
                                    <PlatformBarRightView>
                                        <BaseTextButton colorStyle='mainInteractiveColor' textSize='md'>
                                            Right
                                        </BaseTextButton>
                                    </PlatformBarRightView>
                                </PlarformBarConfig>
                            }
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
