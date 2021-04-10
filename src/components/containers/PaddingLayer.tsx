import React from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from './Layer';
import { LayerProps } from './Layer/types';

export function PaddingLayer(props: LayerProps): JSX.Element {
    const { spacings } = useTheme();
    return <Layer padding={spacings.m} {...props} />;
}
