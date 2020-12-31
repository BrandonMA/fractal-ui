import React from 'react';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';

export function Cell(props: BaseBoxProps): JSX.Element {
    const theme = useTheme<FractalTheme>();
    return (
        <BaseBox
            padding='m'
            backgroundColor='foreground'
            borderRadius='m'
            elevation={1}
            shadowColor='shadowColor'
            shadowOffset={theme.shadowProperties.offset}
            shadowRadius={theme.shadowProperties.radius}
            shadowOpacity={theme.shadowProperties.opacity}
            {...props}
        />
    );
}
