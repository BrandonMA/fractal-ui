import React from 'react';
import { Switch as NativeSwitch } from 'react-native';
import { useTheme } from '../../core/context/hooks/useTheme';
import { SwitchProps } from './types';

export function Switch({ value, onValueChange }: SwitchProps): JSX.Element {
    const { colors } = useTheme();

    return (
        <NativeSwitch
            trackColor={{ false: colors.placeholder, true: colors.mainInteractiveColor }}
            thumbColor={colors.white}
            value={value}
            onValueChange={onValueChange}
        />
    );
}
