import React from 'react';
import { TextField } from './TextField';
import { TextFieldProps } from './BaseTextField/types';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { LayerProps } from '../containers/Layer/types';
import { useTheme } from '../../hooks/useTheme';
import { Layer } from '../containers/Layer';

export interface IconTextFieldProps extends Partial<Omit<LayerProps, 'children'>> {
    leftImage?: (color: string, size: number) => JSX.Element;
    rightImage?: (color: string, size: number) => JSX.Element;
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    textFieldProps?: TextFieldProps;
}

export function IconTextField({
    leftImage,
    rightImage,
    value,
    placeholder,
    onChangeText,
    textFieldProps,
    ...others
}: IconTextFieldProps): JSX.Element {
    const { spacings, sizes, colors, borderRadius } = useTheme();
    const paddingLeft = leftImage != null ? spacings.xs : undefined;
    const paddingRight = rightImage != null ? spacings.xs : undefined;

    return (
        <HorizontalLayer
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            borderRadius={borderRadius.s}
            height={sizes.textFieldHeight}
            backgroundColor={colors.textField}
            justifyContent={'space-evenly'}
            alignItems={'center'}
            {...others}
        >
            {leftImage != null ? (
                <Layer flexShrink={0} height={sizes.textFieldIconSize} width={sizes.textFieldIconSize}>
                    {leftImage(colors.placeholder, sizes.textFieldIconSize)}
                </Layer>
            ) : null}
            <TextField
                paddingLeft={paddingLeft}
                paddingRight={paddingRight}
                flex={1}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                {...textFieldProps}
            />
            {rightImage != null ? (
                <Layer flexShrink={0} height={sizes.textFieldIconSize} width={sizes.textFieldIconSize}>
                    {rightImage(colors.placeholder, sizes.textFieldIconSize)}
                </Layer>
            ) : null}
        </HorizontalLayer>
    );
}
