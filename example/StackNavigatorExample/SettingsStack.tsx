import React from 'react';
import { ScreenStackHeaderConfig } from 'react-native-screens';
import { SafeAreaView, Text } from 'react-native';
import { NavigationRouteProps, StackScreen } from '../../src/Navigation';

export function SettingsStack(props: NavigationRouteProps): JSX.Element {
    return (
        <StackScreen {...props} style={{ backgroundColor: 'white' }}>
            <ScreenStackHeaderConfig title='Settings' hidden={false} />
            <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>We are on the settings page</Text>
            </SafeAreaView>
        </StackScreen>
    );
}
