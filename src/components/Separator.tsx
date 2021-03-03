import React from 'react';
import { LayerProps } from './containers/Layer/types';
import { Layer } from './containers';
import { useTheme } from '../hooks/useTheme';

export interface SeparatorProps extends Omit<LayerProps, 'children'> {
    isAtBackgroundLevel?: boolean;
}

export function Separator({ isAtBackgroundLevel, ...others }: SeparatorProps): JSX.Element {
    const { colors } = useTheme();

    return <Layer height={1} width={'100%'} backgroundColor={isAtBackgroundLevel ? colors.placeholder : colors.background} {...others} />;
}
