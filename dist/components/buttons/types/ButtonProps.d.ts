import { ReactNode } from 'react';
import { BasePressableProps } from '../../baseComponents/BasePressable';
import { BasicColors } from '../../types/BasicColors';
export interface ButtonProps extends Partial<Omit<BasePressableProps, 'children'>> {
    children?: ReactNode;
    text?: string;
    addShadow?: boolean;
    variant: BasicColors;
    reduceColor?: boolean;
}
