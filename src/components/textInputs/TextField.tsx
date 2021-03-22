import React from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { sizes } from '../../themes/templates/lightFractalTheme';
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
            fontSize={14}
            paddingRight={spacings.s}
            paddingLeft={spacings.s}
            height={sizes.textFieldHeight}
            {...props}
        />
    );
}
