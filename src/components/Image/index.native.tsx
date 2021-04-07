import React from 'react';
import styled from 'styled-components/native';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps
} from '../../sharedProps';
import Reanimated from 'react-native-reanimated';
import { ImageProps } from './types';
import { useAnimationStyles } from '../../animations/native/hooks/useAnimationStyles';

const StyledImage = styled(Reanimated.Image)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
` as typeof Reanimated.Image;

export function Image({ source, resizeMode, style, ...others }: ImageProps): JSX.Element {
    const animationStyles = useAnimationStyles(others);
    const finalSource = typeof source == 'string' ? { uri: source } : source;

    return <StyledImage source={finalSource} resizeMode={resizeMode} style={[animationStyles, style]} />;
}
