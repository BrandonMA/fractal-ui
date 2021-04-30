import { AnimationContent, AnimationProps, FractalSharedProps } from '../../../sharedProps';
import { ReactNode } from 'react';
export interface PressableProps extends FractalSharedProps, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    type?: string;
    onPress?: () => void;
    whileHover?: AnimationContent;
    whileTap?: AnimationContent;
    onPressIn?: () => void;
    onPressOut?: () => void;
}
