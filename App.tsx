import React, { memo, useCallback, useMemo } from 'react';
import { registerRootComponent } from 'expo';
import {
    SafeAreaFullScreen,
    StackNavigator,
    StackScreen,
    StackScreenContent,
    TabBar,
    TabBarItem,
    TabNavigator,
    TabScreen,
    BaseButton,
    FractalAppRoot,
    BaseContainer,
    BaseBackground,
    BaseText,
    PlarformBarConfig,
    BaseTextButton,
    PlatformBarRightView,
    tabBarHiddenAtom
} from './src';
import { Entypo } from '@expo/vector-icons';
import { useSetRecoilState } from 'recoil';

function HomeContent(): JSX.Element {
    const setTabBarHidden = useSetRecoilState(tabBarHiddenAtom);

    const callback = useCallback(() => {
        setTabBarHidden((currentValue) => !currentValue);
    }, [setTabBarHidden]);

    return <BaseButton colorStyle='mainInteractiveColor' onPress={callback} text='Prueba' removeShadow />;
}

const MemoizedHomeIcon = memo(Entypo);

function MainTabBar(): JSX.Element {
    const renderHomeItem = useMemo(
        () => (color: string, size: number): JSX.Element => <MemoizedHomeIcon name='home' size={size} color={color} />,
        []
    );
    return (
        <TabBar tabBarVariant='middle-action' tabBarPosition='right'>
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
        <FractalAppRoot>
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
