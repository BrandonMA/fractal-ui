import React from 'react';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseTextField, BaseTextFieldProps } from '../baseComponents/BaseTextField';

export function TextField(props: BaseTextFieldProps): JSX.Element {
    const theme = useTheme<FractalTheme>();

    return (
        <BaseTextField
            borderRadius='textFieldRadius'
            color='textColor'
            backgroundColor='textFieldColor'
            placeholderTextColor={theme.colors.placeholderColor}
            padding='s'
            height={theme.interactiveItems.textFieldHeight}
            {...props}
        />
    );
}
