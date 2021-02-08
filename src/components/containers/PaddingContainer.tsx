import React from 'react';
import { useFractalTheme } from '../../hooks/useFractalTheme';
import { Box } from './Box';
import { BoxProps } from './Box/types';

export function PaddingContainer(props: BoxProps): JSX.Element {
    const { padding } = useFractalTheme();
    return <Box padding={padding.m} {...props} />;
}
