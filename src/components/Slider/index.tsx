import React, { forwardRef } from 'react';
import { SliderProps } from './types';
import { BaseSlider } from './BaseSlider';
import { Layer } from '../containers';

export const Slider = forwardRef(
    (
        {
            defaultValue,
            minimumValue,
            maximumValue,
            onValueChange,
            onSlidingStart,
            onSlidingComplete,
            step,
            name,
            value,
            ...layerProps
        }: SliderProps,
        ref: any
    ): JSX.Element => {
        return (
            <Layer ref={ref} {...layerProps}>
                <BaseSlider
                    defaultValue={defaultValue}
                    minimumValue={minimumValue}
                    maximumValue={maximumValue}
                    onValueChange={onValueChange}
                    onSlidingStart={onSlidingStart}
                    onSlidingComplete={onSlidingComplete}
                    step={step}
                    name={name}
                    value={value}
                />
            </Layer>
        );
    }
);
