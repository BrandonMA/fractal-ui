import React, { ReactNode } from 'react';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { ButtonVariant } from './types/ButtonVariant';
export interface ButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    active: boolean;
    useGrayVariant?: boolean;
    children?: (color: string) => ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
}
declare const ToggleButton: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<unknown>>;
export { ToggleButton };
