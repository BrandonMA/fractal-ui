import React from 'react';
import { ActivityIndicatorProps as BaseActivityIndicatorProps, ActivityIndicator as BaseActivityIndicator } from 'react-native';
import { FractalThemeColors } from '../themes/FractalThemeColors';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../themes/FractalTheme';
import { RequiredKeys } from 'utility-types';

interface ActivityIndicatorProps extends Omit<BaseActivityIndicatorProps, 'color'> {
    color: RequiredKeys<FractalThemeColors>;
}

export function ActivityIndicator({ color, ...others }: ActivityIndicatorProps): JSX.Element {
    const { colors } = useTheme<FractalTheme>();
    return <BaseActivityIndicator {...others} color={colors[color]} />;
}
