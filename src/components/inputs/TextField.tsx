import React from 'react';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseTextField, BaseTextFieldProps } from '../baseComponents/BaseTextField';

export function TextField(props: BaseTextFieldProps): JSX.Element {
    const theme = useTheme<FractalTheme>();
    return (
        <BaseTextField
            borderRadius='m'
            color='textColor'
            backgroundColor='background'
            placeholderTextColor={theme.colors.placeholderColor}
            padding='s'
            height={theme.interactiveItems.height}
            {...props}
        />
    );
}
