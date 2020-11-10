import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useTabBarInsetsBasedOnPosition } from './hooks/useTabBarInsetsBasedOnPosition';
import { TabBarInsetsContext } from '../TabBarInsetsProvider';
import { TabBarProps } from './types';
import { Animated, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTabBarComponent } from './util/getTabBarComponent';
import { useCurrentTabBarConfig } from '../TabBarConfigProvider/hooks';
import { Keyboard } from 'react-native';

export function TabBar(props: TabBarProps): JSX.Element {
    const { style, ...others } = props;
    const { config, setConfig } = useCurrentTabBarConfig();
    const { tabBarHidden } = config;
    const TabBar = getTabBarComponent(config.tabBarVariant);
    const tabBarInsets = useTabBarInsetsBasedOnPosition(config.tabBarPosition ?? 'bottom', tabBarHidden); // Calculate insets depending on the position of the TabBar for content screens.
    const { setInsets } = useContext(TabBarInsetsContext);
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

    useEffect(() => {
        setInsets(tabBarInsets);
    }, [tabBarInsets, setInsets]);

    const hideWhenKeyboardAppears = useCallback(() => {
        setConfig((config) => {
            return { ...config, tabBarHidden: true };
        });
    }, [setConfig]);

    const showWhenKeyboardAppears = useCallback(() => {
        setConfig((config) => {
            return { ...config, tabBarHidden: false };
        });
    }, [setConfig]);

    useEffect(() => {
        const showListener = Keyboard.addListener('keyboardDidShow', hideWhenKeyboardAppears);
        const hideListener = Keyboard.addListener('keyboardDidHide', showWhenKeyboardAppears);
        return () => {
            showListener.remove();
            hideListener.remove();
        };
    }, [hideWhenKeyboardAppears, showWhenKeyboardAppears]);

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
