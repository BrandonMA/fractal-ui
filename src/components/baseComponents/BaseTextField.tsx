import React from 'react';
import { ColorProps } from '@shopify/restyle';
import { TextInput, TextInputProps } from 'react-native';
import { BaseBoxProps } from './../baseComponents/BaseBox';
import { FractalTheme } from '../../themes/FractalTheme';
import { useCustomWebStyles } from './hooks/useCustomWebStyles';

export interface BaseTextFieldProps extends Omit<BaseBoxProps, 'children'>, ColorProps<FractalTheme>, TextInputProps {}

export function BaseTextField(props: BaseTextFieldProps): JSX.Element {
    const restyleProps = useCustomWebStyles(
        {
            outline: 'none'
        },
        props
    ) as BaseTextFieldProps;
    return <TextInput {...restyleProps} />;
}
