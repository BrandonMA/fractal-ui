import React from 'react';
import { Layer } from '../containers';
import { BaseSwitch } from './BaseSwitch';
import { SwitchProps } from './types';

export function Switch({ value, onValueChange, ...layerProps }: SwitchProps): JSX.Element {
    return (
        <Layer {...layerProps}>
            <BaseSwitch value={value} onValueChange={onValueChange} />
        </Layer>
    );
}
