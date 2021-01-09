import React from 'react';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';

export function Cell(props: BaseBoxProps): JSX.Element {
    const { shadowProperties } = useTheme<FractalTheme>();
    return (
        <BaseBox
            padding='cell'
            backgroundColor='cellColor'
            borderRadius='cellRadius'
            elevation={1}
            shadowColor='shadowColor'
            shadowOffset={shadowProperties.offset}
            shadowRadius={shadowProperties.radius}
            shadowOpacity={shadowProperties.opacity}
            {...props}
        />
    );
}
