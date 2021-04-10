import React from 'react';
import { Layer } from './Layer';
import { LayerProps } from './Layer/types';

export function HorizontalLayer(props: LayerProps): JSX.Element {
    return <Layer flexDirection={'row'} {...props} />;
}
