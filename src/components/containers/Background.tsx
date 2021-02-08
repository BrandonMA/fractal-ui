import React from 'react';
import { useFractalTheme } from '../../hooks/useFractalTheme';
import { Box } from './Box';
import { BoxProps } from './Box/types';

export function Background(props: BoxProps): JSX.Element {
    const { colors } = useFractalTheme();
    return <Box backgroundColor={colors.background} flex={1} {...props} />;
}
