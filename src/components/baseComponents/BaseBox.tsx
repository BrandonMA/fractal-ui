import { createBox } from '@shopify/restyle';
import { ComponentProps, ReactNode } from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { Animated } from 'react-native';

export const BaseBox = Animated.createAnimatedComponent(createBox<FractalTheme>());

export interface BaseBoxProps extends ComponentProps<typeof BaseBox> {
    children: ReactNode;
}
