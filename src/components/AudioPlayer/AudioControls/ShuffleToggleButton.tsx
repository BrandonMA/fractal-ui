import React from 'react';
import { ShuffleIcon } from '../../../assets/ShuffleIcon';
import { RoundedToggleButton } from './RoundedToggleButton';
import { ToggleControlProps } from './types';
import { SMALL_ICON_SIZE } from './sizes';

export function ShuffleToggleButton({ active, onPress }: ToggleControlProps): JSX.Element {
    return (
        <RoundedToggleButton useGrayVariant active={active} onPress={onPress}>
            {(tintColor: string) => <ShuffleIcon fill={tintColor} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />}
        </RoundedToggleButton>
    );
}
