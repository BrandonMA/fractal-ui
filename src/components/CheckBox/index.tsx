import React from 'react';
import { Layer } from '../containers';
import { CheckBoxProps } from './types';
import { BaseCheckBox } from './BaseCheckBox';

export function CheckBox({ value, onValueChange, label, ...layerProps }: CheckBoxProps): JSX.Element {
    return (
        <Layer {...layerProps}>
            <BaseCheckBox value={value} onValueChange={onValueChange} label={label} />
        </Layer>
    );
}
