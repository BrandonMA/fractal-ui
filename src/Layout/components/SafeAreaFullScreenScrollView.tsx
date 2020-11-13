import React from 'react';
import { Animated, ScrollViewProps } from 'react-native';
import { useScrollViewProps } from '../hooks/useScrollViewProps';

export interface SafeAreaFullScreenScrollViewProps extends Omit<Animated.AnimatedProps<ScrollViewProps>, 'children'> {
    children: React.ReactNode;
}

export function SafeAreaFullScreenScrollView(props: SafeAreaFullScreenScrollViewProps): JSX.Element {
    const scrollViewProps = useScrollViewProps();
    return <Animated.ScrollView {...props} {...scrollViewProps} />;
}
