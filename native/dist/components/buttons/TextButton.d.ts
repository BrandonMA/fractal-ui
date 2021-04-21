import React from 'react';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { TextProps } from '../text/BaseText/types';
import { ButtonVariant } from './ButtonVariant';
export interface TextButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    children?: string;
    textProps?: Omit<TextProps, 'children'>;
    leftIcon?: (color: string) => JSX.Element;
    rightIcon?: (color: string) => JSX.Element;
    style?: any;
    onPress?: () => void;
}
export declare const TextButton: React.ForwardRefExoticComponent<TextButtonProps & React.RefAttributes<unknown>>;