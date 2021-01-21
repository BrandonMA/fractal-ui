import { useTheme } from '@shopify/restyle';
import React from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseText, BaseTextProps } from '../baseComponents/BaseText';
import { BaseTouchableOpacity, BaseTouchableOpacityProps } from '../baseComponents/BaseTouchableOpacity';
import { ButtonColorVariant } from './types/ButtonColorVariant';
import { TitleColorVariant } from './types/TitleColorVariant';

export interface TextButtonProps extends Partial<Omit<BaseTouchableOpacityProps, 'children'>> {
    children?: string;
    textProps?: Omit<BaseTextProps, 'children'>;
    leftIcon?: (color: string) => JSX.Element;
    rightIcon?: (color: string) => JSX.Element;
    variant?: ButtonColorVariant | TitleColorVariant | 'navigationBarButtonColor';
}

export function TextButton({
    leftIcon,
    rightIcon,
    children,
    textProps,
    variant = 'mainInteractiveColor',
    ...others
}: TextButtonProps): JSX.Element {
    const { colors } = useTheme<FractalTheme>();

    return (
        <BaseTouchableOpacity flexDirection='row' alignItems='center' {...others}>
            {leftIcon ? leftIcon(colors[variant]) : null}
            {children != null ? (
                <BaseText variant={variant} {...textProps}>
                    {children}
                </BaseText>
            ) : null}
            {rightIcon ? rightIcon(colors[variant]) : null}
        </BaseTouchableOpacity>
    );
}
