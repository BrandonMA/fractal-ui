import React from 'react';
import { StackScreenContent, Link, SafeAreaFullScreen } from '../../../../src';
import { Text } from 'react-native';

export function MainScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <SafeAreaFullScreen style={{ backgroundColor: '#F6F6F6' }}>
                <Text>Hola</Text>
                <Link to='/home/settings'>
                    <Text>Go To Settings</Text>
                </Link>
            </SafeAreaFullScreen>
        </StackScreenContent>
    );
}
