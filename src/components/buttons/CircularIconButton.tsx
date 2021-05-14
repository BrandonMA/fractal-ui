import React, { ReactNode } from 'react';
import { Button, ButtonProps } from './Button';
import { useTheme } from '../../context/hooks/useTheme';
import { getCircularIconButtonAccessibilityProps } from './accessibility/getCircularIconButtonAccessibilityProps';

export interface CircularIconButtonProps extends ButtonProps {
    children?: (color: string) => ReactNode | Array<ReactNode>;
}

const CircularIconButton = (props: CircularIconButtonProps): JSX.Element => {
    const { variant, children, ...others } = props;
    const { colors, sizes } = useTheme();

    const colorName = `${variant}InteractiveColor800`;
    const color = colors[colorName];

    const backgroundColorName = `${variant}InteractiveColor400`;
    const backgroundColor = colors[backgroundColorName];

    const pressedColorName = `${variant}InteractiveColor`;
    const pressedColor = colors[pressedColorName];

    return (
        <Button
            initial={{ backgroundColor }}
            variant={variant}
            backgroundColor={backgroundColor}
            pressedBackgroundColor={pressedColor}
            height={sizes.interactiveItemHeight}
            width={sizes.interactiveItemHeight}
            borderRadius={sizes.interactiveItemHeight / 2}
            {...getCircularIconButtonAccessibilityProps()}
            {...others}
        >
            {children?.(color)}
        </Button>
    );
};

CircularIconButton.displayName = 'CircularIconButton';

export { CircularIconButton };
