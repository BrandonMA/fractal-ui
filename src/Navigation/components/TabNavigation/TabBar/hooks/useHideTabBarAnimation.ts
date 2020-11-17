import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCallback, useMemo, useRef } from 'react';
import { Animated, Platform } from 'react-native';
import { constants } from '../../../../constants';

export function useHideTabBarAnimation(): [Animated.Value, (hidden: boolean) => void] {
    const insets = useSafeAreaInsets();
    const animatedValue = useRef(new Animated.Value(insets.bottom + constants.tabBarHeight)).current;

    const animateHiddenChange = useCallback(
        (hidden: boolean) => {
            Animated.spring(animatedValue, {
                toValue: hidden ? insets.bottom + constants.tabBarHeight : 0,
                useNativeDriver: Platform.OS !== 'web'
            }).start();
        },
        [insets, animatedValue]
    );

    return useMemo(() => {
        return [animatedValue, animateHiddenChange];
    }, [animatedValue, animateHiddenChange]);
}
