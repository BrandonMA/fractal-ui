import { ToggleButton, ToggleButtonProps } from './ToggleButton';
import { useTheme } from '../../context';
import React from 'react';
import { getRoundedToggleButtonAccessibilityProps } from './accessibility/getRoundedToggleButtonAccessibilityProps';

export function RoundedToggleButton(props: ToggleButtonProps): JSX.Element {
    const { sizes } = useTheme();
    return (
        <ToggleButton
            height={sizes.interactiveItemHeight}
            width={sizes.interactiveItemHeight}
            borderRadius={sizes.interactiveItemHeight / 2}
            {...getRoundedToggleButtonAccessibilityProps()}
            {...props}
        />
    );
}
