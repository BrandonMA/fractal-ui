import { useTheme } from '@shopify/restyle';
import React from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseText, BaseTextProps } from '../baseComponents/BaseText';
import { BaseTouchableOpacity, BaseTouchableOpacityProps } from '../baseComponents/BaseTouchableOpacity';
import { BasicColors } from '../types/BasicColors';
import { TitleButtonVariant } from './types/TitleButtonVariant';

export interface TextButtonProps extends Partial<Omit<BaseTouchableOpacityProps, 'children'>> {
    children?: (color: string) => JSX.Element;
    textProps?: Omit<BaseTextProps, 'children'>;
    text?: string;
    variant: BasicColors | TitleButtonVariant | 'navigationBarButtonColor';
}

export function TextButton({ text, children, textProps, variant, ...others }: TextButtonProps): JSX.Element {
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
