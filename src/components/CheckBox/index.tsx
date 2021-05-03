import React, { forwardRef } from 'react';
import { Layer } from '../containers';
import { CheckBoxProps } from './types';
import { BaseCheckBox } from './BaseCheckBox';

const CheckBox = forwardRef(
    ({ value, onValueChange, label, ...layerProps }: CheckBoxProps, ref: any): JSX.Element => {
        return (
            <Layer ref={ref} {...layerProps}>
                <BaseCheckBox value={value} onValueChange={onValueChange} label={label} />
            </Layer>
        );
    }
);

CheckBox.displayName = 'CheckBox';

export { CheckBox };
