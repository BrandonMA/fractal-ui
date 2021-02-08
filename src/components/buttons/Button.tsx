import React from 'react';
import { Text } from '../text';
import { useFractalTheme } from '../../hooks/useFractalTheme';
import { BaseButton } from './BaseButton';
import { ButtonProps } from './BaseButton/types';

export function Button(props: ButtonProps): JSX.Element {
    const { variant, children, text } = props;
    const { borderRadius, colors, sizes, shadowProperties, textStyles } = useFractalTheme();
    const colorName = `${variant}InteractiveColor`;

    return (
        <BaseButton
            height={sizes.buttonHeight}
            width={'100%'}
            backgroundColor={colors[colorName]}
            borderRadius={borderRadius.m}
            boxShadow={shadowProperties.boxShadow}
            {...props}
        >
            {children}
            {text != null ? (
                <Text color={textStyles.button.color} fontWeight={textStyles.button.fontWeight} fontSize={textStyles.button.fontSize}>
                    {text}
                </Text>
            ) : null}
        </BaseButton>
    );
}
