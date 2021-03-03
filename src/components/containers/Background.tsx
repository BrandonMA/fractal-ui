import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Layer } from './Layer';
import { LayerProps } from './Layer/types';

export function Background(props: LayerProps): JSX.Element {
    const { colors } = useTheme();
    return <Layer backgroundColor={colors.background} flex={1} {...props} />;
}
