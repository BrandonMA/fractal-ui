import React from 'react';
import { Animated, ViewProps } from 'react-native';
export interface FullScreenProps extends Omit<Animated.AnimatedProps<ViewProps>, 'children'> {
    children: React.ReactNode;
}
export declare function FullScreen(props: FullScreenProps): JSX.Element;
