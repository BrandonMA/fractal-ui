/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, forwardRef } from 'react';
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

export const Button = forwardRef(
    (props: ButtonProps, ref: any): JSX.Element => {
        const { variant, children, text, addShadow, ...others } = props;
        const { borderRadius, colors, sizes, shadows } = useTheme();

        const colorName = `${variant}InteractiveColor`;
        const color = colors[colorName];

        const pressedColorName = `${variant}InteractiveColor600`;
        const pressedColor = colors[pressedColorName];

        return (
            <BaseButton
                ref={ref}
                height={sizes.interactiveItemHeight}
                width={'100%'}
                backgroundColor={color}
                pressedBackgroundColor={pressedColor}
                borderRadius={borderRadius.m}
                boxShadow={addShadow ? shadows.mainShadow : undefined}
                justifyContent='center'
                alignItems='center'
                {...others}
            >
                {children}
                {text != null ? <Text variant='button'>{text}</Text> : null}
            </BaseButton>
        );
    }
);
