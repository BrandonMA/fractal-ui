import React from 'react';
import styled from 'styled-components/native';
import { LayerProps } from './types';
import Reanimated from 'react-native-reanimated';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { View } from 'react-native';
import { useAnimationStyles } from '../../../hooks/useAnimationStyles';

const StyledLayer = styled(Reanimated.createAnimatedComponent(View))`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
` as typeof Reanimated.View;

export const Layer = ({ style, ...others }: LayerProps): JSX.Element => {
    const animationStyles = useAnimationStyles(others);
    return <StyledLayer {...others} style={[animationStyles, style]} />;
};
