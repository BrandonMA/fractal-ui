import React, { forwardRef } from 'react';
import { Layer } from '../containers';
import { BaseSwitch } from './BaseSwitch';
import { SwitchProps } from './types';

export const Switch = forwardRef(
    ({ value, onValueChange, ...layerProps }: SwitchProps, ref: any): JSX.Element => {
        return (
            <Layer ref={ref} {...layerProps}>
                <BaseSwitch value={value} onValueChange={onValueChange} />
            </Layer>
        );
    }
);
