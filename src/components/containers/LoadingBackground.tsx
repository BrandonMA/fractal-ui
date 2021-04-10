import React from 'react';
import { LayerProps } from './Layer/types';
import { Background } from './Background';
import { ActivityIndicator } from '../ActivityIndicator';
import { useTheme } from '../../core/context/hooks/useTheme';

export function LoadingBackground(props: Omit<LayerProps, 'children'>): JSX.Element {
    const { colors } = useTheme();

    return (
        <Background {...props}>
            <ActivityIndicator color={colors.mainInteractiveColor} />
        </Background>
    );
}
