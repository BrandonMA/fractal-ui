import React from 'react';
import styled from 'styled-components/native';
import { TextProps } from 'react-native';
import { TextSize } from '../types/TextSize';
import { getFontSize } from '../util/getFontSize';

interface StyledTextProps {
    color: string;
    textSize: TextSize;
    bold?: boolean;
    textAlign?: 'center' | 'left' | 'right';
}

const StyledText = styled.Text`
    font-size: ${(props: StyledTextProps) => getFontSize(props.textSize)};
    color: ${(props: StyledTextProps) => props.color};
    font-weight: ${(props: StyledTextProps) => (props.bold ? 'bold' : 'normal')};
    text-align: ${(props: StyledTextProps) => props.textAlign ?? 'left'};
`;

export interface InternalTextProps extends TextProps, StyledTextProps {
    children: string;
    textAlign?: 'center' | 'left' | 'right';
}

export function InternalText(props: InternalTextProps): JSX.Element {
    return <StyledText {...props} />;
}
