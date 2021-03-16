import { ReactNode } from 'react';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { ButtonVariant } from './ButtonVariant';
export interface ButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    text?: string;
    addShadow?: boolean;
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
}
export declare function Button(props: ButtonProps): JSX.Element;
