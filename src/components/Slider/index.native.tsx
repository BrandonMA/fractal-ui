import React from 'react';
import { Platform } from 'react-native';
import NativeSlider from '@react-native-community/slider';
import { SliderProps } from './types';
import { useTheme } from '../../core';

export function Slider({ step = 1, ...others }: SliderProps): JSX.Element {
    const { colors } = useTheme();
    return (
        <NativeSlider
            minimumTrackTintColor={colors.mainInteractiveColor}
            maximumTrackTintColor={Platform.OS == 'android' ? colors.label : colors.placeholder}
            thumbTintColor={Platform.OS == 'android' ? colors.mainInteractiveColor : colors.white}
            step={step}
            {...others}
        />
    );
}
