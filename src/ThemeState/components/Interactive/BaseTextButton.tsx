import React from 'react';
import styled from 'styled-components/native';
import { TextProps, TouchableOpacity } from 'react-native';
import { RequiredKeys } from 'utility-types';
import { InteractiveColors } from '../../types';
import { useThemeColor } from '../../hooks';
import { TextSize } from '../types/TextSize';
import { getFontSize } from '../util/getFontSize';

interface StyledTextProps {
    color: string;
    textSize: TextSize;
}

export const StyledText = styled.Text`
    font-size: ${(props: StyledTextProps) => getFontSize(props.textSize)};
    color: ${(props: StyledTextProps) => props.color};
`;

interface BaseTextButtonProps extends TextProps {
    onPress?: () => void;
    colorStyle: RequiredKeys<InteractiveColors>;
    textSize: TextSize;
    children: string;
}

export function BaseTextButton(props: BaseTextButtonProps): JSX.Element {
    const { onPress, colorStyle, ...others } = props;
    const interactiveColor = useThemeColor(colorStyle);

    return (
        <TouchableOpacity onPress={onPress}>
            <StyledText {...others} color={interactiveColor.base} />
        </TouchableOpacity>
    );
}
