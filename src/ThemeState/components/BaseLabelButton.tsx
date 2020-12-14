import React from 'react';
import styled from 'styled-components/native';
import { Pressable, TextProps } from 'react-native';
import { RequiredKeys } from 'utility-types';
import { InteractiveColors } from '../types';
import { useThemeColor } from '../hooks';

interface StyledTextProps {
    color: string;
}

export const StyledText = styled.Text`
    font-size: 13px;
    color: ${(props: StyledTextProps) => props.color};
`;

interface BaseLabelButtonProps extends TextProps {
    onPress?: () => void;
    colorStyle: RequiredKeys<InteractiveColors>;
}

export function BaseLabelButton(props: BaseLabelButtonProps): JSX.Element {
    const { onPress, colorStyle, ...others } = props;
    const interactiveColor = useThemeColor(colorStyle);
    return (
        <Pressable onPress={onPress}>
            <StyledText {...others} color={interactiveColor.base} />
        </Pressable>
    );
}
