import React, { ReactNode } from 'react';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { ButtonVariant } from './ButtonVariant';
export interface ButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    active: boolean;
    useGrayVariant?: boolean;
    children?: (color: string) => ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
}
export declare const ToggleButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
