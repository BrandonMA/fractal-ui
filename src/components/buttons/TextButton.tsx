import { useTheme } from '@shopify/restyle';
import React from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseText, BaseTextProps } from '../baseComponents/BaseText';
import { BaseTouchableOpacity, BaseTouchableOpacityProps } from '../baseComponents/BaseTouchableOpacity';
import { ButtonVariant } from './types/ButtonVariant';
import { TitleButtonVariant } from './types/TitleButtonVariant';

export interface TextButtonProps extends Omit<BaseTouchableOpacityProps, 'children'> {
    children?: (color: string) => JSX.Element;
    textProps?: Omit<BaseTextProps, 'children'>;
    text: string;
    variant: ButtonVariant | TitleButtonVariant;
}

export function TextButton(props: TextButtonProps): JSX.Element {
    const { text, children, textProps, variant, ...others } = props;
    const theme = useTheme<FractalTheme>();

    return (
        <BaseTouchableOpacity flexDirection='row' alignItems='center' {...others}>
            {children ? children(theme.colors[variant]) : null}
            <BaseText variant={variant} {...textProps}>
                {text}
            </BaseText>
        </BaseTouchableOpacity>
    );
}
