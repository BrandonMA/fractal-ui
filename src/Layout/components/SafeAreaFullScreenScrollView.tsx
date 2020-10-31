import React from 'react';
import { Animated, ScrollViewProps } from 'react-native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';
import { FullScreen } from './FullScreen';

export interface SafeAreaFullScreenScrollViewProps extends Omit<Animated.AnimatedProps<ScrollViewProps>, 'children'> {
    children: React.ReactNode;
}

export function SafeAreaFullScreenScrollView(props: SafeAreaFullScreenScrollViewProps): JSX.Element {
    const { totalInsets, tabBarInsets } = useNavigationInsets();
    return (
        <FullScreen>
            <Animated.ScrollView
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
