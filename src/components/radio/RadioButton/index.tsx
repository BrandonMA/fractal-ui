import React, { forwardRef } from 'react';
import { RadioButtonProps } from '../types';
import { Layer } from '../../containers/Layer/index.native';
import { BaseRadioButton } from './BaseRadioButton';

export const RadioButton = forwardRef(
    ({ label, onPress, active, value, ...layerProps }: RadioButtonProps, ref: any): JSX.Element => {
        return (
            <Layer ref={ref} {...layerProps}>
                <BaseRadioButton value={value} active={active} onPress={onPress} label={label} />
            </Layer>
        );
    }
);
