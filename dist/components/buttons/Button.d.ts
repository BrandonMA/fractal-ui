import React, { ReactNode } from 'react';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { ButtonVariant } from './types/ButtonVariant';
export interface ButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    text?: string;
    addShadow?: boolean;
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export { Button };
