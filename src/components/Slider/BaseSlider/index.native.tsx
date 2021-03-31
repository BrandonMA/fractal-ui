import React from 'react';
import { Platform } from 'react-native';
import Slider from '@react-native-community/slider';
import { BaseSliderProps } from '../types';
import { useTheme } from '../../../core/context/hooks/useTheme';

export function BaseSlider({ step = 1, initialValue, ...others }: BaseSliderProps): JSX.Element {
    const { colors } = useTheme();
    return (
        <Slider
            minimumTrackTintColor={colors.mainInteractiveColor}
            maximumTrackTintColor={Platform.OS == 'android' ? colors.label : colors.placeholder}
            thumbTintColor={Platform.OS == 'android' ? colors.mainInteractiveColor : colors.white}
            step={step}
            value={initialValue}
            {...others}
        />
    );
}
