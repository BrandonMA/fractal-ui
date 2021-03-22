import React from 'react';
import { Text } from '../text';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { TextProps } from '../text/BaseText/types';
import { useTheme } from '../../core/context/hooks/useTheme';
import { ButtonVariant } from './ButtonVariant';
import { TouchableOpacity } from './TouchableOpacity';

export interface TextButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    children?: string;
    textProps?: Omit<TextProps, 'children'>;
    leftIcon?: (color: string) => JSX.Element;
    rightIcon?: (color: string) => JSX.Element;
    style?: any;
    onPress?: () => void;
}

export function TextButton({ variant, children, leftIcon, rightIcon, textProps, ...others }: TextButtonProps): JSX.Element {
    const { colors } = useTheme();
    const colorName = `${variant}InteractiveColor`;
    const color = colors[colorName];

    return (
        <TouchableOpacity {...others}>
            {leftIcon && leftIcon(color)}
            {children && (
                <Text variant={'textButton'} color={color} {...textProps}>
                    {children}
                </Text>
            )}
            {rightIcon && rightIcon(color)}
        </TouchableOpacity>
    );
}
