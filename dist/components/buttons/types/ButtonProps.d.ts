import { ReactNode } from 'react';
import { BasePressableProps } from '../../baseComponents/BasePressable';
import { ButtonColorVariant } from './ButtonColorVariant';
export interface ButtonProps extends Partial<Omit<BasePressableProps, 'children'>> {
    children?: ReactNode;
    text?: string;
    addShadow?: boolean;
    variant?: ButtonColorVariant;
    reduceColor?: boolean;
    loading?: boolean;
}
