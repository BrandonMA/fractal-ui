import React from 'react';
import styled from 'styled-components/native';
import Reanimated from 'react-native-reanimated';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { useAnimationStyles } from '../../../hooks/useAnimationStyles';
import { TouchableOpacityProps } from './types';

const StyledTouchableOpacity = styled(Reanimated.createAnimatedComponent(RNTouchableOpacity as any))`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
` as typeof RNTouchableOpacity;

export function TouchableOpacity({ style, ...others }: TouchableOpacityProps): JSX.Element {
    const animationStyles = useAnimationStyles(others);

    return <StyledTouchableOpacity style={[animationStyles, style]} {...others} />;
}
