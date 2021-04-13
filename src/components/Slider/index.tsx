import React from 'react';
import { SliderProps } from './types';
import { BaseSlider } from './BaseSlider';
import { Layer } from '../containers';

export function Slider({
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
}: SliderProps): JSX.Element {
    return (
        <Layer {...layerProps}>
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
