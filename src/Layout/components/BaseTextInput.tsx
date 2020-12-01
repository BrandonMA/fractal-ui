import React from 'react';
import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';
import { colors } from '../../Colors';

const StyledTextInput = styled(TextInput)`
    background-color: ${colors.white.base400};
    border-radius: 12px;
    height: 44px;
    padding: 12px;
`;

export function BaseTextInput(props: TextInputProps): JSX.Element {
    return <StyledTextInput {...props} placeholderTextColor={colors.white.base300} />;
}
