import { ToggleButton, ToggleButtonProps } from './ToggleButton';
import { useTheme } from '../../context';
import React from 'react';

export function RoundedToggleButton(props: ToggleButtonProps): JSX.Element {
    const { sizes } = useTheme();
    return (
        <ToggleButton
            height={sizes.interactiveItemHeight}
            width={sizes.interactiveItemHeight}
            borderRadius={sizes.interactiveItemHeight / 2}
            {...props}
        />
    );
}
