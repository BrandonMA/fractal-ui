import React, { useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components/native';
import { colors } from '../../Colors';
import { Animated, Pressable, PressableProps } from 'react-native';
import { getCursorStyle } from '../util';
import { useSpringAnimation } from '../../Animations/hooks';

interface StyledButtonProps extends Animated.AnimatedProps<PressableProps> {
    backgroundColor?: string;
    backgroundShadow?: string;
}

const StyledButton = Animated.createAnimatedComponent(styled(Pressable)`
    background-color: ${(props: StyledButtonProps) => props.backgroundColor ?? colors.blue.base};
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    box-shadow: ${(props: StyledButtonProps) => props.backgroundShadow ?? colors.blue.shadow};
    height: 44px;
    ${getCursorStyle()}
`);

interface StyledTextProps {
    color?: string;
}

const StyledText = styled.Text`
    font-weight: bold;
    font-size: 17px;
    color: ${(props: StyledTextProps) => props.color ?? colors.white.base};
    text-align: center;
`;

export interface BaseButtonProps extends StyledButtonProps, StyledTextProps {
    text?: string;
    removeShadow?: boolean;
}

export function BaseButton(props: BaseButtonProps): JSX.Element {
    const { text, style, removeShadow, children, onPressIn, onPressOut, color, ...others } = props;

    const scaleValue = useRef(new Animated.Value(1)).current;
    const pressInAnimation = useSpringAnimation(scaleValue, 0.95);
    const pressOutAnimation = useSpringAnimation(scaleValue, 1);
    const shadowValue = useRef(new Animated.Value(0.5)).current;
    const hideAnimation = useSpringAnimation(shadowValue, 0);
    const showAnimation = useSpringAnimation(shadowValue, 0.5);

    const handlePressIn = useCallback(
        (event) => {
            pressInAnimation();
            hideAnimation();
            if (onPressIn != null) {
                onPressIn(event);
            }
        },
        [pressInAnimation, hideAnimation, onPressIn]
    );

    const handlePressOut = useCallback(
        (event) => {
            pressOutAnimation();
            showAnimation();
            if (onPressOut != null) {
                onPressOut(event);
            }
        },
        [pressInAnimation, showAnimation, onPressOut]
    );

    const finalStyle = useMemo(() => {
        return [
            style,
            {
                shadowOpacity: removeShadow ? 0 : shadowValue,
                transform: [
                    {
                        scale: scaleValue
                    }
                ]
            }
        ];
    }, [shadowValue, scaleValue, style]);

    return (
        <StyledButton {...others} onPressIn={handlePressIn} onPressOut={handlePressOut} style={finalStyle}>
            {text != null ? (
                <StyledText color={color} selectable={false}>
                    {text}
                </StyledText>
            ) : (
                children
            )}
        </StyledButton>
    );
}
