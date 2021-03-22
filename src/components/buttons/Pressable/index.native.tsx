import React from 'react';
import styled from 'styled-components/native';
import Reanimated from 'react-native-reanimated';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { Pressable as RNPressable } from 'react-native';
import { useAnimationStyles } from '../../../animations/native/hooks/useAnimationStyles';
import { PressableProps } from './types';
import { usePressableAnimationStyles } from '../../../animations/native/hooks/usePressableAnimationStyles';

const StyledPressable = styled(Reanimated.createAnimatedComponent(RNPressable as any))`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

export function Pressable({ style, ...others }: PressableProps): JSX.Element {
    const animationStyles = useAnimationStyles(others);
    const [tapStyles, handlePressIn, handlePressOut] = usePressableAnimationStyles(others);

    return (
        <StyledPressable onPressIn={handlePressIn} onPressOut={handlePressOut} style={[tapStyles, animationStyles, style]} {...others} />
    );
}
