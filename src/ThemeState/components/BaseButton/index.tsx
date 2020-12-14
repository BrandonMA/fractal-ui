import React from 'react';
import { useBaseButtonAnimations } from './hooks/useBaseButtonAnimations';
import { BaseButtonProps } from './types/BaseButtonProps';
import { useThemeColor } from '../../hooks';
import { Animated, Pressable, PressableProps } from 'react-native';
import styled from 'styled-components/native';
import { getCursorStyle } from '../../../Layout';
import { memo } from 'react';

export interface StyledButtonProps extends Animated.AnimatedProps<PressableProps> {
    backgroundColor: string;
    backgroundShadow: string;
}

const StyledButton = Animated.createAnimatedComponent(styled(Pressable)`
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

const StyledText = memo(styled.Text`
    font-weight: bold;
    font-size: 17px;
    color: ${(props: StyledTextProps) => props.textColor};
    text-align: center;
`);

export function BaseButton(props: BaseButtonProps): JSX.Element {
    const { text, colorStyle, children, ...others } = props;
    const interactiveColor = useThemeColor(colorStyle);
    const textColor = useThemeColor('textColor');
    const [handlePressIn, handlePressOut, finalStyle] = useBaseButtonAnimations(props);

    return (
        <StyledButton
            {...others}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={finalStyle}
            backgroundColor={interactiveColor.base}
            backgroundShadow={interactiveColor.base300}
        >
            {text != null ? (
                <StyledText textColor={textColor.base} selectable={false}>
                    {text}
                </StyledText>
            ) : (
                children
            )}
        </StyledButton>
    );
}
