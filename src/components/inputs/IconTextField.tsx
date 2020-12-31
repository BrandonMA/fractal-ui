import React from 'react';
import { FractalTheme } from '../../themes/FractalTheme';
import { BaseBox, BaseBoxProps } from '../baseComponents/BaseBox';
import { HorizontalView } from '../containers/HorizontalView';
import { TextField } from './TextField';
import { useTheme } from '@shopify/restyle';
import { BaseTextFieldProps } from '../baseComponents/BaseTextField';

interface IconTextFieldProps extends Omit<BaseBoxProps, 'children'> {
    leftImage: (color: string, size: number) => JSX.Element;
    value: string;
    onChangeText?: (text: string) => void;
    placeholder: string;
    textFieldProps?: BaseTextFieldProps;
}

export function IconTextField(props: IconTextFieldProps): JSX.Element {
    const { leftImage, value, placeholder, onChangeText, textFieldProps, ...others } = props;
    const theme = useTheme<FractalTheme>();

    return (
        <HorizontalView
            paddingHorizontal='s'
            borderRadius='m'
            height={theme.interactiveItems.height}
            backgroundColor='background'
            {...others}
        >
            <BaseBox alignSelf='center' height={theme.textFields.iconSize} width={theme.textFields.iconSize}>
                {leftImage(theme.colors.placeholderColor, theme.textFields.iconSize)}
            </BaseBox>
            <TextField
                paddingLeft='xs'
                flexGrow={1}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                {...textFieldProps}
            />
        </HorizontalView>
    );
}
