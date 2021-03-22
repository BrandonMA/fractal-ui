import React from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { LayerProps } from './Layer/types';
import { PaddingLayer } from './PaddingLayer';

export function Box(props: LayerProps): JSX.Element {
    const { colors, borderRadius, shadows } = useTheme();
    return <PaddingLayer backgroundColor={colors.foreground} borderRadius={borderRadius.m} boxShadow={shadows.mainShadow} {...props} />;
}
