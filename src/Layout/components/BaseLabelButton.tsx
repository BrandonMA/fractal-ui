import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../Colors';
import { Pressable } from 'react-native';

interface BaseLabelButtonProps {
    color?: string;
    children: string;
    onPress: () => void;
}

export const StyledText = styled.Text`
    font-size: 13px;
    color: ${(props: BaseLabelButtonProps) => props.color ?? colors.blue.base};
`;

export function BaseLabelButton(props: BaseLabelButtonProps): JSX.Element {
    return (
        <Pressable onPress={props.onPress}>
            <StyledText {...props} />
        </Pressable>
    );
}
