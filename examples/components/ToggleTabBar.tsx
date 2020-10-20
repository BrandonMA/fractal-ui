import { useTabBarConfig } from '../../src';
import React, { useCallback } from 'react';
import { Pressable, Text } from 'react-native';

export function ToggleTabBar(): JSX.Element {
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
