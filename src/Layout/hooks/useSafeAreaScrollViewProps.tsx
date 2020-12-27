import { useNavigationInsets } from '../../Navigation/hooks';
import { Animated, Platform, ScrollViewProps } from 'react-native';
import { useMemo } from 'react';

export function useSafeAreaScrollViewProps(): Omit<Animated.AnimatedProps<ScrollViewProps>, 'children'> {
    const { totalInsets, tabBarInsets } = useNavigationInsets();
    return useMemo(() => {
        return {
            automaticallyAdjustContentInsets: false,
            contentInsetAdjustmentBehavior: 'scrollableAxes',
            contentInset: { bottom: tabBarInsets.bottom },
            scrollIndicatorInsets: { bottom: tabBarInsets.bottom },
            contentContainerStyle:
                Platform.OS === 'ios'
                    ? null
                    : {
                          paddingTop: 0,
                          paddingBottom: totalInsets.bottom,
                          paddingRight: 0,
                          paddingLeft: 0
                      }
        };
    }, [totalInsets, tabBarInsets]);
}
