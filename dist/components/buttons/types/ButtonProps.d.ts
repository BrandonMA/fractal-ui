import { ReactNode } from 'react';
import { BasePressableProps } from '../../baseComponents/BasePressable';
import { ButtonVariant } from './ButtonVariant';
export interface ButtonProps extends Omit<BasePressableProps, 'children'> {
    children?: ReactNode;
    text?: string;
    addShadow?: boolean;
    variant: ButtonVariant;
    reduceColor?: boolean;
}
