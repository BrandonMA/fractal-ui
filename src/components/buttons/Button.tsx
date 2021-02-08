import React from 'react';
import { Text } from '../text';
import { useFractalTheme } from '../../hooks/useFractalTheme';
import { BaseButton } from './BaseButton';
import { ButtonProps } from './BaseButton/types';

export function Button(props: ButtonProps): JSX.Element {
    const { variant, children, text, addShadow } = props;
    const { borderRadius, colors, sizes, shadowProperties } = useFractalTheme();
    const colorName = `${variant}InteractiveColor`;
    const pressedColorName = `${variant}InteractiveColor600`;
    const color = colors[colorName];
    const pressedColor = colors[pressedColorName];

    return (
        <BaseButton
            height={sizes.buttonHeight}
            width={'100%'}
            backgroundColor={color}
            pressedBackgroundColor={pressedColor}
            borderRadius={borderRadius.m}
            boxShadow={addShadow ? shadowProperties.boxShadow : undefined}
            justifyContent='center'
            alignItems='center'
            {...props}
        >
            {children}
            {text != null ? <Text variant='button'>{text}</Text> : null}
        </BaseButton>
    );
}
