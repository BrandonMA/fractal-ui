import React from 'react';
import { RepeatIcon } from '../../../assets/RepeatIcon';
import { ControlToggleButtonProps } from './types';
import { ShuffleIcon } from '../../../assets/ShuffleIcon';
import { getControlToggleButtonAccessibilityProps } from '../accessibility/getControlToggleButtonAccessibilityProps';
import { RoundedToggleButton } from '../../buttons/RoundedToggleButton';
import { useTheme } from '../../../context';

export function AudioControlToggleButton({ active, onPress, variant }: ControlToggleButtonProps): JSX.Element {
    const { sizes } = useTheme();
    return (
        <RoundedToggleButton
            variant={'main'}
            useGrayVariant
            active={active}
            onPress={onPress}
            width={sizes.audioControlToggleButtonSize}
            height={sizes.audioControlToggleButtonSize}
            borderRadius={sizes.audioControlToggleButtonSize / 2}
            {...getControlToggleButtonAccessibilityProps(variant)}
        >
            {(tintColor: string) => {
                if (variant === 'repeat') {
                    return (
                        <RepeatIcon
                            fill={tintColor}
                            width={sizes.audioControlToggleButtonIconSize}
                            height={sizes.audioControlToggleButtonIconSize}
                        />
                    );
                }
                return (
                    <ShuffleIcon
                        fill={tintColor}
                        width={sizes.audioControlToggleButtonIconSize}
                        height={sizes.audioControlToggleButtonIconSize}
                    />
                );
            }}
        </RoundedToggleButton>
    );
}
