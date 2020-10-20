import { NavigationBar, NavigationBarRightView } from '../../src';
import { Text } from 'react-native';
import { StackScreenContent } from '../../src/Navigation/components/StackNavigation';
import { SafeAreaFullScreen } from '../../src/Layout/components';
import React from 'react';

export function Book(): JSX.Element {
    return (
        <>
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
        </>
    );
}
