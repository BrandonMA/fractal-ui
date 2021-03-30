import React from 'react';
import { Layer } from '../containers/Layer';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { Text } from '../text';
import { LayerProps } from '../containers/Layer/types';

export interface DetailsRowProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    details: string;
}

export function DetailsRow({ title, details, ...others }: DetailsRowProps): JSX.Element {
    return (
        <HorizontalLayer alignItems='center' {...others}>
            <Layer flexGrow={1}>
                <Text variant='small'>{title}</Text>
            </Layer>
            <Text variant='label'>{details}</Text>
        </HorizontalLayer>
    );
}