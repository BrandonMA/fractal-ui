import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { BoxProps } from './types';
import Reanimated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { extractBackgroundColor } from '../../../styles/BackgroundStyles';
import { extractBorderStyles } from '../../../styles/BorderStyles';
import { extractDimensionStyles } from '../../../styles/DimensionStyles';
import { extractDisplayStyles } from '../../../styles/DisplayStyles';
import { useAnimationContent } from '../../../hooks/useAnimationContent';

const StyledBox = styled(Reanimated.View)`
    ${extractBackgroundColor};
    ${extractDimensionStyles};
    ${extractDisplayStyles};
    ${extractBorderStyles};
` as typeof Reanimated.View;

export function Box({ initial, animate, variants, ...others }: BoxProps): JSX.Element {
    const initialAnimationContent = useAnimationContent(initial, variants);
    const animateAnimationContent = useAnimationContent(animate, variants);

    const opacityAnimatedValue = useSharedValue(initialAnimationContent.opacity);
    const widthAnimatedValue = useSharedValue(initialAnimationContent.width);
    const heightAnimatedValue = useSharedValue(initialAnimationContent.height);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: opacityAnimatedValue.value,
            width: widthAnimatedValue.value,
            height: heightAnimatedValue.value
        };
    });

    useEffect(() => {
        if (animateAnimationContent.opacity) {
            opacityAnimatedValue.value = withSpring(animateAnimationContent.opacity);
        }

        if (animateAnimationContent.width) {
            widthAnimatedValue.value = withSpring(animateAnimationContent.width);
        }

        if (animateAnimationContent.height) {
            heightAnimatedValue.value = withSpring(animateAnimationContent.height);
        }
    }, [opacityAnimatedValue, widthAnimatedValue, heightAnimatedValue, animateAnimationContent]);

    return <StyledBox {...others} style={animatedStyles} />;
}
