import React, { useMemo } from 'react';
import styled from 'styled-components/native';
import { Platform, TextInput, TextInputProps } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';

interface StyledTextInputProps {
    backgroundColor: string;
    paddingLeft?: string;
}

const StyledTextInput = styled(TextInput)`
    background-color: ${(props: StyledTextInputProps) => props.backgroundColor};
    border-radius: 12px;
    height: 44px;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: ${(props: StyledTextInputProps) => (props.paddingLeft ? `${props.paddingLeft}px` : '12px')};
`;

interface BaseTextFieldProps extends TextInputProps {
    paddingLeft?: number;
}

export function BaseTextField(props: BaseTextFieldProps): JSX.Element {
    const { style, paddingLeft, ...others } = props;
    const fieldColor = useThemeColor('fieldColor');
    const memoizedStyles = useMemo(() => [style, { outline: 'none' }], [style]);

    return (
        <StyledTextInput
            {...others}
            placeholderTextColor={fieldColor.base300}
            backgroundColor={fieldColor.base400}
            style={Platform.OS === 'web' ? memoizedStyles : style}
            paddingLeft={paddingLeft}
        />
    );
}
