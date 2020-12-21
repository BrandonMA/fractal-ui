import { useNavigationInsets, usePresentationType } from '../../Navigation/hooks';
import { Animated, Platform, ScrollViewProps } from 'react-native';
import { useMemo } from 'react';

export function useScrollViewProps(): Omit<Animated.AnimatedProps<ScrollViewProps>, 'children'> {
    const { totalInsets, tabBarInsets } = useNavigationInsets();
    const presentationType = usePresentationType();
    return useMemo(() => {
        return {
            automaticallyAdjustContentInsets: true,
            contentInsetAdjustmentBehavior: 'scrollableAxes',
            contentInset: { bottom: tabBarInsets.bottom },
            scrollIndicatorInsets: { bottom: tabBarInsets.bottom },
            contentContainerStyle:
                Platform.OS === 'ios'
                    ? null
                    : {
                          paddingTop: totalInsets.top,
                          paddingBottom: presentationType === 'modal' ? 0 : totalInsets.bottom,
                          paddingRight: 0,
                          paddingLeft: 0
                      }
        };
    }, [totalInsets, tabBarInsets, presentationType]);
}
