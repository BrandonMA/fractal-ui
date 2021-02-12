import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { BoxProps } from './types';
import Reanimated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { extractBackgroundColor } from '../../../styles/BackgroundStyles';
import { extractBorderStyles } from '../../../styles/BorderStyles';
import { extractDimensionStyles } from '../../../styles/DimensionStyles';
import { extractDisplayStyles } from '../../../styles/DisplayStyles';
import { useAnimationContent } from '../../../hooks/useAnimationContent';
import { extractShadowStyles } from '../../../styles/ShadowStyles';

const StyledBox = styled(Reanimated.View)`
    ${extractBackgroundColor};
    ${extractDimensionStyles};
    ${extractDisplayStyles};
    ${extractBorderStyles};
    ${extractShadowStyles};
` as typeof Reanimated.View;

export function Box({ initial, animate, style, variants, ...others }: BoxProps): JSX.Element {
    const initialAnimationContent = useAnimationContent(initial, variants);
    const animateAnimationContent = useAnimationContent(animate, variants);

    const opacityAnimatedValue = useSharedValue(initialAnimationContent.opacity);
    const widthAnimatedValue = useSharedValue(initialAnimationContent.width);
    const heightAnimatedValue = useSharedValue(initialAnimationContent.height);
    const scaleAnimatedValue = useSharedValue(initialAnimationContent.scale);
    const rotationAnimatedValue = useSharedValue(initialAnimationContent.rotate);

    const animatedStyles = useAnimatedStyle(() => {
        const styles: { [key: string]: any } = {
            transform: [{}]
        };

        if (opacityAnimatedValue.value != null) {
            styles.opacity = opacityAnimatedValue.value;
        }

        if (widthAnimatedValue.value != null) {
            styles.width = widthAnimatedValue.value;
        }

        if (heightAnimatedValue.value != null) {
            styles.height = heightAnimatedValue.value;
        }

        if (scaleAnimatedValue.value != null) {
            styles.transform[0].scale = scaleAnimatedValue.value;
        }

        if (rotationAnimatedValue.value != null) {
            styles.transform[0].rotate = rotationAnimatedValue.value;
        }

        return styles;
    });

    useEffect(() => {
        if (animateAnimationContent.opacity != null) {
            opacityAnimatedValue.value = withSpring(animateAnimationContent.opacity);
        }

        if (animateAnimationContent.width != null) {
            widthAnimatedValue.value = withSpring(animateAnimationContent.width);
        }

        if (animateAnimationContent.height != null) {
            heightAnimatedValue.value = withSpring(animateAnimationContent.height);
        }

        if (animateAnimationContent.scale != null) {
            scaleAnimatedValue.value = withSpring(animateAnimationContent.scale);
        }

        if (animateAnimationContent.rotate != null) {
            rotationAnimatedValue.value = withSpring(animateAnimationContent.rotate);
        }
    }, [opacityAnimatedValue, widthAnimatedValue, scaleAnimatedValue, heightAnimatedValue, animateAnimationContent, rotationAnimatedValue]);

    return <StyledBox {...others} style={[style, animatedStyles]} />;
}
