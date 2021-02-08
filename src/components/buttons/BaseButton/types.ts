import { ReactNode } from 'react';
import { AnimationProps } from '../../../styles/AnimationProps';
import { InlineStyles } from '../../../styles/InlineStyles';

export type ButtonVariant = 'main' | 'alternative' | 'danger' | 'warning' | 'success';

export interface ButtonProps extends InlineStyles, AnimationProps {
    children?: ReactNode | Array<ReactNode>;
    onPress?: () => void;
    variant: ButtonVariant;
    text?: string;
    addShadow?: boolean;
}

export interface BaseButtonProps extends ButtonProps {
    pressedBackgroundColor?: string;
}
