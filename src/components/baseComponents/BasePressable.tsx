import React, { ReactNode } from 'react';
import { Animated, Pressable, PressableProps } from 'react-native';
import { useCursorStyles } from './hooks/useCursorStyles';
import { BoxProps } from './BaseBox';

export interface BasePressableProps extends Partial<Omit<BoxProps, 'children'>>, PressableProps {
    children?: ReactNode;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function BasePressable(props: BasePressableProps): JSX.Element {
    const restyleProps = useCursorStyles(props);

    return <AnimatedPressable {...restyleProps} />;
}
