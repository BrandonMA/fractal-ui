import React from 'react';
import { RadioButtonProps } from '../types';
import { Layer } from '../../containers/Layer/index.native';
import { BaseRadioButton } from './BaseRadioButton';

export function RadioButton({ label, onPress, active, value, ...layerProps }: RadioButtonProps): JSX.Element {
    return (
        <Layer {...layerProps}>
            <BaseRadioButton value={value} active={active} onPress={onPress} label={label} />
        </Layer>
    );
}
