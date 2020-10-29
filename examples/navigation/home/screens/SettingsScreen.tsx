import React from 'react';
import { StackScreenContent } from '../../../../src';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SettingsScreen(): JSX.Element {
    return (
        <StackScreenContent>
            <StackScreenContent style={{ backgroundColor: '#FFF' }}>
                <SafeAreaView>
                    <Text>Settings</Text>
                </SafeAreaView>
            </StackScreenContent>
        </StackScreenContent>
    );
}
