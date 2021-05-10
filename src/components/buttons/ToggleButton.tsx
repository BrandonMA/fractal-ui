import React, { ReactNode, forwardRef, useState } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { BaseButton } from './BaseButton';
import { ButtonVariant } from './types/ButtonVariant';
import { getButtonAccessibilityProps } from './accessibility/getButtonAccessibilityProps';

export interface ToggleButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    active: boolean;
    useGrayVariant?: boolean;
    children?: (color: string) => ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
}

const ToggleButton = forwardRef(
    (props: ToggleButtonProps, ref: any): JSX.Element => {
        const { active, variant, children, onPress, useGrayVariant, ...others } = props;
        const { colors, sizes, borderRadius } = useTheme();

        const [pressed, setPressed] = useState(false);

        const backgroundColorName = `${variant}InteractiveColor100`;
        const backgroundColor = active ? colors[backgroundColorName] : colors.background;

        const pressedColorName = `${variant}InteractiveColor200`;
        const pressedColor = active ? colors[pressedColorName] : colors.background;

        const colorName = `${variant}InteractiveColor`;
        const color = active ? colors[colorName] : useGrayVariant ? colors.placeholder : colors.text;

        const handleButtonPress = (): void => {
            setPressed(true);
            onPress?.();
        };

        return (
            <BaseButton
                ref={ref}
                height={sizes.interactiveItemHeight}
                width={'100%'}
                pressedBackgroundColor={pressedColor}
                borderRadius={borderRadius.m}
                justifyContent='center'
                alignItems='center'
                onPress={handleButtonPress}
                initial={{ backgroundColor }}
                variants={{
                    active: {
                        backgroundColor
                    },
                    inactive: {
                        backgroundColor: colors.background
                    }
                }}
                animate={active ? 'active' : 'inactive'}
                {...getButtonAccessibilityProps(pressed)}
                {...others}
            >
                {children?.(color)}
            </BaseButton>
        );
    }
);

ToggleButton.displayName = 'ToggleButton';

export { ToggleButton };
