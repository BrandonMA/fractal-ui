import React from 'react';
import { useFractalTheme } from '../../hooks/useFractalTheme';
import { Box } from './Box';
import { BoxProps } from './Box/types';

export function Cell(props: BoxProps): JSX.Element {
    const { colors, borderRadius, shadowProperties } = useFractalTheme();
    return <Box backgroundColor={colors.foreground} borderRadius={borderRadius.m} boxShadow={shadowProperties.boxShadow} {...props} />;
}
