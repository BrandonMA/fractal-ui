import { Animated, Pressable, PressableProps } from 'react-native';
import styled from 'styled-components/native';
import { getCursorStyle } from '../../../Layout';
import { memo } from 'react';

export interface StyledButtonProps extends Animated.AnimatedProps<PressableProps> {
    backgroundColor: string;
    backgroundShadow: string;
}

export const StyledButton = Animated.createAnimatedComponent(styled(Pressable)`
    background-color: ${(props: StyledButtonProps) => props.backgroundColor};
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 8px ${(props: StyledButtonProps) => props.backgroundShadow};
    height: 44px;
    ${getCursorStyle()}
`);

export interface StyledTextProps {
    textColor: string;
}

export const StyledText = memo(styled.Text`
    font-weight: bold;
    font-size: 17px;
    color: ${(props: StyledTextProps) => props.textColor};
    text-align: center;
`);
