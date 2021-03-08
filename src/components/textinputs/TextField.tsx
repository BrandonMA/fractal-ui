import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { sizes } from '../../themes/lightFractalTheme';
import { BaseTextField } from './BaseTextField';
import { TextFieldProps } from './BaseTextField/types';

export function TextField(props: TextFieldProps): JSX.Element {
    const { colors, borderRadius, spacings } = useTheme();

    return (
        <BaseTextField
            borderRadius={borderRadius.s}
            color={colors.text}
            backgroundColor={colors.textField}
            placeholderTextColor={colors.placeholder}
            paddingRight={spacings.s}
            paddingLeft={spacings.s}
            height={sizes.textFieldHeight}
            {...props}
        />
    );
}
