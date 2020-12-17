import React from 'react';
import styled from 'styled-components/native';
import { useThemeColor } from '../../index';
import { TextProps } from 'react-native';
import { getFontSize, TextSize } from '../types/TextSize';
import { TextType } from '../types/TextType';

interface StyledTextProps {
    color: string;
    textSize: TextSize;
    bold?: boolean;
}

const StyledText = styled.Text`
    font-size: ${(props: StyledTextProps) => getFontSize(props.textSize)};
    color: ${(props: StyledTextProps) => props.color};
    font-weight: ${(props: StyledTextProps) => (props.bold ? 'bold' : 'regular')};
`;

interface BaseTextProps extends TextProps {
    textSize: TextSize;
    bold?: boolean;
    textType?: TextType;
    children: string;
}

export function BaseText(props: BaseTextProps): JSX.Element {
    const { textType, ...others } = props;
    const textColor = useThemeColor('textColor');

    const color = () => {
        switch (textType) {
            case 'placeholder':
                return textColor.base300;
            case 'label':
                return textColor.base200;
            default:
                return textColor.base900;
        }
    };

    return <StyledText {...others} color={color()} />;
}
