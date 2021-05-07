import React from 'react';
import { RepeatIcon } from '../../../assets/RepeatIcon';
import { RoundedToggleButton } from './RoundedToggleButton';
import { ControlToggleButtonProps } from './types';
import { SMALL_ICON_SIZE } from './sizes';
import { ShuffleIcon } from '../../../assets/ShuffleIcon';
import { getControlToggleButtonAccessibilityProps } from '../accessibility/getControlToggleButtonAccessibilityProps';

export function ControlToggleButton({ active, onPress, variant }: ControlToggleButtonProps): JSX.Element {
    return (
        <RoundedToggleButton useGrayVariant active={active} onPress={onPress} {...getControlToggleButtonAccessibilityProps(variant)}>
            {(tintColor: string) => {
                if (variant === 'repeat') {
                    return <RepeatIcon fill={tintColor} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />;
                }
                return <ShuffleIcon fill={tintColor} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />;
            }}
        </RoundedToggleButton>
    );
}
