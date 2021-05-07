import React from 'react';
import { NextIcon } from '../../../assets/NextIcon';
import { PreviousIcon } from '../../../assets/PreviousIcon';
import { useTheme } from '../../../context/hooks/useTheme';
import { BaseButton } from '../../buttons/BaseButton';
import { SMALL_ICON_SIZE } from './sizes';
import { ControlButtonProps } from './types';
import { getControlToggleButtonAccessibilityProps } from '../accessibility/getControlToggleButtonAccessibilityProps';

export function ControlButton({ onPress, variant }: ControlButtonProps): JSX.Element {
    const { colors } = useTheme();
    return (
        <BaseButton
            alignItems={'center'}
            justifyContent={'center'}
            width={36}
            height={36}
            onPress={onPress}
            {...getControlToggleButtonAccessibilityProps(variant)}
        >
            {variant == 'previous' ? (
                <PreviousIcon fill={colors.text} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />
            ) : (
                <NextIcon fill={colors.text} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />
            )}
        </BaseButton>
    );
}
