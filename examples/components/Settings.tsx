import { NavigationBar, StackScreenContent, SafeAreaFullScreen } from '../../src';
import { Text } from 'react-native';
import React from 'react';

export function Settings(): JSX.Element {
    return (
        <>
            <NavigationBar hidden={false} title='Settings' />
            <StackScreenContent>
                <SafeAreaFullScreen>
                    <Text>Settings</Text>
                </SafeAreaFullScreen>
            </StackScreenContent>
        </>
    );
}
