import React from 'react';
import { Animated, FlatListProps } from 'react-native';
import { useScrollViewProps } from '../hooks/useScrollViewProps';

export function SafeAreaFullScreenFlatList<T>(props: Animated.AnimatedProps<FlatListProps<T>>): JSX.Element {
    const scrollViewProps = useScrollViewProps();
    return <Animated.FlatList {...props} {...scrollViewProps} />;
}
