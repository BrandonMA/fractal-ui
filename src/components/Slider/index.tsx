import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SliderProps } from './types';
import { useTheme } from '../../hooks';

interface SliderInputProps {
    backgroundColor: string;
    thumbColor: string;
}

const SliderInput = styled(motion.input as any)`
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    background-color: ${(props: SliderInputProps) => props.backgroundColor};
    outline: none;
    :hover {
        opacity: 1;
    }
    ::-webkit-slider-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background: ${(props: SliderInputProps) => props.thumbColor};
        cursor: pointer;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    }
`;

export function Slider({
    minimumValue,
    maximumValue,
    onValueChange,
    onSlidingComplete,
    onSlidingStart,
    step,
    value
}: SliderProps): JSX.Element {
    const { colors } = useTheme();
    const handleOnChange = (e): void => {
        if (onValueChange) onValueChange(e.target.value);
    };

    const handleTouchEndCapture = (e): void => {
        if (onSlidingComplete) onSlidingComplete(e.target.value);
    };

    const handleTouchStartCapture = (e): void => {
        if (onSlidingStart) onSlidingStart(e.target.value);
    };

    return (
        <SliderInput
            value={value}
            type='range'
            defaultValue={0}
            step={step}
            min={minimumValue}
            max={maximumValue}
            backgroundColor={colors.placeholder}
            thumbColor={colors.mainInteractiveColor}
            onChange={handleOnChange}
            onTouchEndCapture={handleTouchEndCapture}
            onTouchStart={handleTouchStartCapture}
        />
    );
}
