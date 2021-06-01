import React, { forwardRef, ReactNode, useState } from 'react';
import { Text } from '../text';
import { useTheme } from '../../context/hooks/useTheme';
import { BaseButton } from './BaseButton';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { ButtonVariant } from './types/ButtonVariant';
import { getButtonAccessibilityProps } from './accessibility/getButtonAccessibilityProps';
import { useButtonColors } from './hooks/useButtonColors';

export interface ButtonProps extends FractalSharedProps, AnimationProps {
    style?: any;
    variant?: ButtonVariant;
    text?: string;
    addShadow?: boolean;
    pressedBackgroundColor?: string;
    children?: ReactNode | Array<ReactNode> | ((color: string) => ReactNode | Array<ReactNode>);
    onPress?: () => void;
    reduceColor?: boolean;
    ariaLabel?: string;
}

const Button = forwardRef(
    ({ variant = 'main', ariaLabel, children, text, addShadow, onPress, reduceColor, ...others }: ButtonProps, ref: any): JSX.Element => {
        const { borderRadius, sizes, shadows, spacings } = useTheme();
        const [pressed, setPressed] = useState(false);
        const [backgroundColor, foregroundColor, pressedColor] = useButtonColors(variant, reduceColor);

        const handleButtonPress = (): void => {
            setPressed(true);
            onPress?.();
        };

        return (
            <BaseButton
                ref={ref}
                height={sizes.interactiveItemHeight}
                backgroundColor={backgroundColor}
                pressedBackgroundColor={pressedColor}
                borderRadius={borderRadius.m}
                boxShadow={addShadow ? shadows.mainShadow : undefined}
                justifyContent='center'
                alignItems='center'
                paddingRight={spacings.s}
                paddingLeft={spacings.s}
                onPress={handleButtonPress}
                {...getButtonAccessibilityProps(pressed, false, text ?? ariaLabel)}
                {...others}
            >
                {typeof children === 'function' ? children?.(foregroundColor) : children}
                {text != null ? (
                    <Text variant='button' color={foregroundColor}>
                        {text}
                    </Text>
                ) : null}
            </BaseButton>
        );
    }
);

Button.displayName = 'Button';

export { Button };
