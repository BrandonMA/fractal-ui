import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useTabBarInsets } from './hooks/useTabBarInsets';
import { TabBarInsetsContext } from './TabBarInsetsProvider';
import { getTabBarComponent } from './util/getTabBarComponent';
import { useTabBarConfig } from './hooks';
import { TabBarProps } from './types';
import { Animated, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function TabBar(props: TabBarProps): JSX.Element {
    const { config } = useTabBarConfig();
    const { tabBarHidden } = config;
    const TabBar = getTabBarComponent(config.tabBarVariant);
    const tabBarInsets = useTabBarInsets(config.tabBarPosition ?? 'bottom', config.tabBarHidden); // Calculate insets depending on the position of the TabBar for content screens.
    const { setInsets } = useContext(TabBarInsetsContext);
    const insets = useSafeAreaInsets();
    const animatedValue = useRef(new Animated.Value(insets.bottom + 62)).current;

    const toggleHidden = useCallback(
        (hidden: boolean) => {
            Animated.spring(animatedValue, { toValue: hidden ? insets.bottom + 62 : 0, useNativeDriver: Platform.OS !== 'web' }).start();
        },
        [insets]
    );

    useEffect(() => {
        toggleHidden(tabBarHidden ?? false);
    }, [tabBarHidden, toggleHidden]);

    useEffect(() => {
        setInsets(tabBarInsets);
    }, [tabBarInsets, setInsets]);

    return (
        <TabBar
            {...props}
            style={{
                transform: [
                    {
                        translateY: animatedValue
                    }
                ]
            }}
        />
    );
}
