import React from 'react';
import { SliderProps } from './types';
import { BaseSlider } from './BaseSlider';
import { Layer } from '../containers';

export function Slider({
    initialValue = 0,
    minimumValue = 0,
    maximumValue = 1,
    onValueChange,
    onSlidingStart,
    onSlidingComplete,
    step = 1,
    name,
    ...layerProps
}: SliderProps): JSX.Element {
    return (
        <Layer {...layerProps}>
            <BaseSlider
                initialValue={initialValue}
                minimumValue={minimumValue}
                maximumValue={maximumValue}
                onValueChange={onValueChange}
                onSlidingStart={onSlidingStart}
                onSlidingComplete={onSlidingComplete}
                step={step}
                name={name}
            />
        </Layer>
    );
}
