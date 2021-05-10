import React, { ReactNode, forwardRef, useState } from 'react';
import { Text } from '../text';
import { useTheme } from '../../context/hooks/useTheme';
import { BaseButton } from './BaseButton';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { ButtonVariant } from './types/ButtonVariant';
import { getButtonAccessibilityProps } from './accessibility/getButtonAccessibilityProps';

export interface ButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    text?: string;
    addShadow?: boolean;
    children?: ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
}

const Button = forwardRef(
    (props: ButtonProps, ref: any): JSX.Element => {
        const { variant, children, text, addShadow, onPress, ...others } = props;
        const { borderRadius, colors, sizes, shadows } = useTheme();

        const [pressed, setPressed] = useState(false);

        const colorName = `${variant}InteractiveColor`;
        const color = colors[colorName];

        const pressedColorName = `${variant}InteractiveColor600`;
        const pressedColor = colors[pressedColorName];

        const handleButtonPress = (): void => {
            setPressed(true);
            onPress?.();
        };

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
                onPress={handleButtonPress}
                {...getButtonAccessibilityProps(pressed)}
                {...others}
            >
                {children}
                {text != null ? (
                    <Text variant='button' color={variant === 'content' ? colors.text : 'white'}>
                        {text}
                    </Text>
                ) : null}
            </BaseButton>
        );
    }
);

Button.displayName = 'Button';

export { Button };
