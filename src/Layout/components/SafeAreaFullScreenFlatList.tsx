import React from 'react';
import { Animated, FlatListProps } from 'react-native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';
import { FullScreen } from './FullScreen';

export function SafeAreaFullScreenFlatList<T>(props: Animated.AnimatedProps<FlatListProps<T>>): JSX.Element {
    const { totalInsets, tabBarInsets } = useNavigationInsets();
    return (
        <FullScreen>
            <Animated.FlatList
                {...props}
                scrollIndicatorInsets={tabBarInsets}
                contentContainerStyle={{
                    paddingTop: totalInsets.top,
                    paddingBottom: totalInsets.bottom,
                    paddingRight: totalInsets.right,
                    paddingLeft: totalInsets.left
                }}
            />
        </FullScreen>
    );
}
