import React from 'react';
import { RepeatIcon } from '../../../assets/RepeatIcon';
import { RoundedToggleButton } from './RoundedToggleButton';
import { ToggleControlProps } from './types';
import { SMALL_ICON_SIZE } from './sizes';

export function RepeatToggleButton({ active, onPress }: ToggleControlProps): JSX.Element {
    return (
        <RoundedToggleButton useGrayVariant active={active} onPress={onPress}>
            {(tintColor: string) => <RepeatIcon fill={tintColor} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />}
        </RoundedToggleButton>
    );
}
