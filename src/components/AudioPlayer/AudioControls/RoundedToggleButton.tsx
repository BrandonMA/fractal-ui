import React from 'react';
import { ToggleButtonProps, ToggleButton } from '../../buttons/ToggleButton';

interface RoundedToggleButtonProps extends Omit<ToggleButtonProps, 'variant'> {
    size?: number;
}

const SMALL_BUTTON_SIZE = 32;

export function RoundedToggleButton({ size = SMALL_BUTTON_SIZE, ...others }: RoundedToggleButtonProps): JSX.Element {
    return <ToggleButton variant='main' width={size} height={size} borderRadius={size / 2} {...others} />;
}
