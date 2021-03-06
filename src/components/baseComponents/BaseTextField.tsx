import React from 'react';
import { ColorProps } from '@shopify/restyle';
import { TextInput, TextInputProps } from 'react-native';
import { FractalTheme } from '../../themes/FractalTheme';
import { useCustomWebStyles } from './hooks/useCustomWebStyles';
import { BoxProps } from './BaseBox';

export interface BaseTextFieldProps extends Partial<Omit<BoxProps, 'children'>>, ColorProps<FractalTheme>, TextInputProps {}

export function BaseTextField(props: BaseTextFieldProps): JSX.Element {
    const customProps = useCustomWebStyles(
        {
            outline: 'none'
        },
        props
    ) as BaseTextFieldProps;
    return <TextInput {...customProps} />;
}
