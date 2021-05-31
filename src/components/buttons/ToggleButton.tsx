import React, { ReactNode, forwardRef, useState } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { AnimationProps, FractalSharedProps } from '../../sharedProps';
import { BaseButton } from './BaseButton';
import { ButtonVariant } from './types/ButtonVariant';
import { useToggleButtonColors } from './hooks/useToggleButtonColors';
import { getButtonAccessibilityProps } from './accessibility/getButtonAccessibilityProps';
import { getToggleButtonAccessibilityProps } from './accessibility/getToggleButtonAccessibilityProps';
import { useControllableState } from '../../hooks/useControllableState';

export interface ToggleButtonProps extends FractalSharedProps, AnimationProps {
    variant: ButtonVariant;
    active?: boolean;
    useGrayVariant?: boolean;
    children?: (color: string) => ReactNode | Array<ReactNode>;
    style?: any;
    onPress?: () => void;
    onActiveChange?: (active: boolean) => void;
}

const ToggleButton = forwardRef((props: ToggleButtonProps, ref: any): JSX.Element => {
    const { active: activeProp, variant, children, onPress, onActiveChange, useGrayVariant, ...others } = props;
    const { colors, sizes, borderRadius } = useTheme();
    const [active, setActive] = useControllableState(activeProp, false, onActiveChange);
    const [pressed, setPressed] = useState(false);
    const [backgroundColor, foregroundColor, pressedColor] = useToggleButtonColors(variant, active, useGrayVariant);

    const handleButtonPress = (): void => {
        setPressed(true);
        setActive(!active);
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
            {...getToggleButtonAccessibilityProps()}
            {...getButtonAccessibilityProps(pressed)}
            {...others}
        >
            {children?.(foregroundColor)}
        </BaseButton>
    );
});

ToggleButton.displayName = 'ToggleButton';

export { ToggleButton };
