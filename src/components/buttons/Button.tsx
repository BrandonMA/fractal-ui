import React, { ReactNode } from 'react';
import { Text } from '../text';
import { useTheme } from '../../core/context/hooks/useTheme';
import { BaseButton } from './BaseButton';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    text?: string;
    addShadow?: boolean;
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
}

export function Button(props: ButtonProps): JSX.Element {
    const { variant, children, text, addShadow } = props;
    const { borderRadius, colors, sizes, shadows } = useTheme();

    const colorName = `${variant}InteractiveColor`;
    const color = colors[colorName];

    const pressedColorName = `${variant}InteractiveColor600`;
    const pressedColor = colors[pressedColorName];

    return (
        <BaseButton
            height={sizes.interactiveItemHeight}
            width={'100%'}
            backgroundColor={color}
            pressedBackgroundColor={pressedColor}
            borderRadius={borderRadius.m}
            boxShadow={addShadow ? shadows.mainShadow : undefined}
            justifyContent='center'
            alignItems='center'
            {...props}
        >
            {children}
            {text != null ? <Text variant='button'>{text}</Text> : null}
        </BaseButton>
    );
}
