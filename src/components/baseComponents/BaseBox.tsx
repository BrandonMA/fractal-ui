import { createBox, BoxProps as NativeBoxProps } from '@shopify/restyle';
import { ComponentProps, ReactNode } from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { Animated } from 'react-native';

export const BaseBox = Animated.createAnimatedComponent(createBox<FractalTheme>());

export interface BoxProps extends Omit<Partial<NativeBoxProps<FractalTheme>>, 'children'> {
    children: ReactNode;
}

export interface BaseBoxProps extends Partial<ComponentProps<typeof BaseBox>> {
    children: ReactNode;
}
