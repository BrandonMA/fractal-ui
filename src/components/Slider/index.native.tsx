import React from 'react';
import { Platform } from 'react-native';
import NativeSlider from '@react-native-community/slider';
import { SliderProps } from './types';
import { useTheme } from '../../core';

export function Slider(props: SliderProps): JSX.Element {
    const { colors } = useTheme();
    return (
        <NativeSlider
            minimumTrackTintColor={colors.mainInteractiveColor}
            thumbTintColor={Platform.OS == 'android' ? colors.mainInteractiveColor : colors.white}
            {...props}
        />
    );
}
