import { useTheme } from '@shopify/restyle';
import React from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseText, BaseTextProps } from '../baseComponents/BaseText';
import { BaseTouchableOpacity, BaseTouchableOpacityProps } from '../baseComponents/BaseTouchableOpacity';
import { ButtonColorVariant } from './types/ButtonColorVariant';
import { TitleColorVariant } from './types/TitleColorVariant';

export interface TextButtonProps extends Partial<Omit<BaseTouchableOpacityProps, 'children'>> {
    children?: (color: string) => JSX.Element;
    textProps?: Omit<BaseTextProps, 'children'>;
    text?: string;
    variant?: ButtonColorVariant | TitleColorVariant | 'navigationBarButtonColor';
}

export function TextButton({ text, children, textProps, variant = 'mainInteractiveColor', ...others }: TextButtonProps): JSX.Element {
    const { colors } = useTheme<FractalTheme>();

    return (
        <BaseTouchableOpacity flexDirection='row' alignItems='center' {...others}>
            {children ? children(colors[variant]) : null}
            {text != null ? (
                <BaseText variant={variant} {...textProps}>
                    {text}
                </BaseText>
            ) : null}
        </BaseTouchableOpacity>
    );
}
