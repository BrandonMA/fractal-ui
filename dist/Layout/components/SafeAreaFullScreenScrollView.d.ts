import React from 'react';
import { Animated, ScrollViewProps } from 'react-native';
export interface SafeAreaFullScreenScrollViewProps extends Omit<Animated.AnimatedProps<ScrollViewProps>, 'children'> {
    children: React.ReactNode;
}
export declare function SafeAreaFullScreenScrollView(props: SafeAreaFullScreenScrollViewProps): JSX.Element;
