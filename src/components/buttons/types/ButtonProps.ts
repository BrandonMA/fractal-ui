import { ReactNode } from 'react';
import { OptionalKeys } from 'utility-types';
import { lightFractalTheme } from '../../../themes';
import { BasePressableProps } from '../../baseComponents/BasePressable';
import { ButtonColorVariant } from './ButtonColorVariant';

export interface ButtonProps extends Partial<Omit<BasePressableProps, 'children'>> {
    children?: ReactNode;
    text?: string;
    addShadow?: boolean;
    variant?: ButtonColorVariant;
    reduceColor?: boolean;
    loading?: boolean;
    activityIndicatorColor?: OptionalKeys<Partial<typeof lightFractalTheme.colors>>;
}
