import React, { ReactNode } from 'react';
import { Animated, Pressable, PressableProps } from 'react-native';
import { BaseBoxProps } from './../baseComponents/BaseBox';
import { useCursorStyles } from './hooks/useCursorStyles';

export interface BasePressableProps extends Omit<BaseBoxProps, 'children'>, PressableProps {
    children?: ReactNode;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function BasePressable(props: BasePressableProps): JSX.Element {
    const restyleProps = useCursorStyles(props);
    return <AnimatedPressable {...restyleProps} />;
}
