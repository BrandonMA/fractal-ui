import React from 'react';
import { useFractalTheme } from '../../hooks/useFractalTheme';
import { Box } from './Box';
import { BoxProps } from './Box/types';

export function Cell(props: BoxProps): JSX.Element {
    const { colors, borderRadius } = useFractalTheme();
    return <Box {...props} backgroundColor={colors.foreground} borderRadius={borderRadius.m} />;
}
