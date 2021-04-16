import React, { forwardRef } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { Layer } from './Layer';
import { LayerProps } from './Layer/types';

export const MarginLayer = forwardRef(
    (props: LayerProps, ref: any): JSX.Element => {
        const { spacings } = useTheme();
        return <Layer ref={ref} margin={spacings.m} {...props} />;
    }
);
