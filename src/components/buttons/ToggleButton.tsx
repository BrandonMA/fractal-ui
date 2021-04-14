import React, { ReactNode } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { BaseButton } from './BaseButton';
import { ButtonVariant } from './ButtonVariant';

export interface ButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    active: boolean;
    useGrayVariant?: boolean;
    children?: (color: string) => ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
}

export function ToggleButton(props: ButtonProps): JSX.Element {
    const { active, variant, children, onPress, useGrayVariant, ...others } = props;
    const { colors, sizes, borderRadius } = useTheme();

    const backgroundColorName = `${variant}InteractiveColor100`;
    const backgroundColor = active ? colors[backgroundColorName] : colors.background;

    const pressedColorName = `${variant}InteractiveColor200`;
    const pressedColor = colors[pressedColorName];

    const colorName = `${variant}InteractiveColor`;
    const color = active ? colors[colorName] : useGrayVariant ? colors.placeholder : colors.text;

    return (
        <BaseButton
            height={sizes.interactiveItemHeight}
            width={'100%'}
            backgroundColor={backgroundColor}
            pressedBackgroundColor={pressedColor}
            borderRadius={borderRadius.m}
            justifyContent='center'
            alignItems='center'
            onPress={onPress}
            variants={{
                active: {
                    backgroundColor
                },
                inactive: {
                    backgroundColor: colors.background
                }
            }}
            animate={active ? 'active' : 'inactive'}
            {...others}
        >
            {children?.(color)}
        </BaseButton>
    );
}
