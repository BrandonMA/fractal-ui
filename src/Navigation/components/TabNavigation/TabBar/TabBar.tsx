import React, { useCallback, useEffect, useRef } from 'react';
import { TabBarProps } from './types';
import { Animated, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTabBarComponent } from './util/getTabBarComponent';
import { useCurrentTabBarConfig } from '../TabBarConfigProvider/hooks';

export function TabBar(props: TabBarProps): JSX.Element {
    const { style, ...others } = props;
    const { config } = useCurrentTabBarConfig();
    const { tabBarHidden } = config;
    const TabBar = getTabBarComponent(config.tabBarVariant);
    const insets = useSafeAreaInsets();
    const animatedValue = useRef(new Animated.Value(insets.bottom + 62)).current;

    const animateHiddenChange = useCallback(
        (hidden: boolean) => {
            Animated.spring(animatedValue, { toValue: hidden ? insets.bottom + 62 : 0, useNativeDriver: Platform.OS !== 'web' }).start();
        },
        [insets, animatedValue]
    );

    useEffect(() => {
        animateHiddenChange(tabBarHidden ?? false);
    }, [tabBarHidden, animateHiddenChange]);

    return (
        <TabBar
            {...others}
            style={[
                style,
                {
                    transform: [
                        {
                            translateY: animatedValue
                        }
                    ]
                }
            ]}
        />
    );
}
