import React from 'react';
import styled from 'styled-components/native';
import { useThemeColor } from '../index';
import { TextProps } from 'react-native';

interface StyledLabelProps {
    color: string;
}

export const StyledLabel = styled.Text`
    font-size: 13px;
    color: ${(props: StyledLabelProps) => props.color};
`;

export function BaseLabel(props: TextProps): JSX.Element {
    const textColor = useThemeColor('textColor');
    return <StyledLabel {...props} color={textColor.base100} />;
}
