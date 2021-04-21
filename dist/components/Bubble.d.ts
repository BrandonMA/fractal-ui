import React from 'react';
import { TouchableOpacityProps } from './buttons/TouchableOpacity/types';
interface BubbleTriangleProps {
    color: string;
}
interface BubbleProps extends BubbleTriangleProps, TouchableOpacityProps {
    arrowPosition: 'left' | 'right';
}
export declare const Bubble: React.ForwardRefExoticComponent<BubbleProps & React.RefAttributes<unknown>>;
export {};
