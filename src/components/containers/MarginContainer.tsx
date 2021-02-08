import React from 'react';
import { useFractalTheme } from '../../hooks/useFractalTheme';
import { Box } from './Box';
import { BoxProps } from './Box/types';

export function MarginContainer(props: BoxProps): JSX.Element {
    const { margin } = useFractalTheme();
    return <Box margin={margin.m} {...props} />;
}
