import React from 'react';
import { Switch as NativeSwitch, Platform } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { SwitchProps } from './types';

export function Switch({ value, onValueChange }: SwitchProps): JSX.Element {
    const { colors } = useTheme();
    const trueColor = Platform.OS === 'android' ? colors.mainInteractiveColor400 : colors.mainInteractiveColor;
    const thumbColor = Platform.OS === 'android' && value ? colors.mainInteractiveColor : colors.white;

    return (
        <NativeSwitch
            trackColor={{ false: colors.placeholder, true: trueColor }}
            thumbColor={thumbColor}
            value={value}
            onValueChange={onValueChange}
        />
    );
}
