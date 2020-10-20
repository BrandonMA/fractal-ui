import { NavigationBar, SafeAreaFullScreen, StackScreenContent, useHistory } from '../../src';
import React, { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import { ToggleTabBar } from './ToggleTabBar';

export function Home(): JSX.Element {
    const history = useHistory();
    const goToSettings = useCallback(() => history.push('/home/settings'), []);

    return (
        <>
            <NavigationBar hidden={false} title='Home' />
            <StackScreenContent>
                <SafeAreaFullScreen>
                    <Pressable onPress={goToSettings}>
                        <Text>Settings</Text>
                    </Pressable>
                    <ToggleTabBar />
                </SafeAreaFullScreen>
            </StackScreenContent>
        </>
    );
}
