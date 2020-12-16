import React from 'react';
import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';
import { useThemeColor } from '../../index';

interface StyledTextInputProps {
    backgroundColor: string;
}

const StyledTextInput = styled(TextInput)`
    background-color: ${(props: StyledTextInputProps) => props.backgroundColor};
    border-radius: 12px;
    height: 44px;
    padding: 12px;
`;

export function BaseTextField(props: TextInputProps): JSX.Element {
    const fieldColor = useThemeColor('fieldColor');
    return <StyledTextInput {...props} placeholderTextColor={fieldColor.base300} backgroundColor={fieldColor.base400} />;
}
