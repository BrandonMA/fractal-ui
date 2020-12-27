import React from 'react';
import { useBaseButtonAnimations } from '../InternalButton/hooks/useBaseButtonAnimations';
import { InternalButtonProps } from './types/InternalButtonProps';
import { Animated, Pressable, PressableProps } from 'react-native';
import styled from 'styled-components/native';
import { getCursorStyle, Spacer } from '../../../../Layout';
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
    box-shadow: ${(props: StyledButtonProps) => props.backgroundShadow};
    height: 44px;
    flex-direction: row;
    ${getCursorStyle()};
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

export function InternalButton(props: InternalButtonProps): JSX.Element {
    const { text, backgroundColor, textColor, shadow, children, ...others } = props;
    const [handlePressIn, handlePressOut, finalStyle] = useBaseButtonAnimations(props);

    return (
        <StyledButton
            {...others}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={finalStyle}
            backgroundColor={backgroundColor}
            backgroundShadow={shadow}
        >
            {children}
            {children != null && text != null ? <Spacer width={8} /> : null}
            {text != null ? (
                <StyledText textColor={textColor} selectable={false}>
                    {text}
                </StyledText>
            ) : null}
        </StyledButton>
    );
}
