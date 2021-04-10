import React from 'react';
import styled from 'styled-components/native';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { ImageBackgroundProps } from './types';
import { useAnimationStyles } from '../../../animations/native/hooks/useAnimationStyles';

const StyledImageBackground = styled.ImageBackground`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
` as typeof styled.ImageBackground;

export function ImageBackground({ source, resizeMode, style, ...others }: ImageBackgroundProps): JSX.Element {
    const animationStyles = useAnimationStyles(others);
    return (
        <StyledImageBackground
            resizeMode={resizeMode}
            source={typeof source == 'string' ? { uri: source } : source}
            {...others}
            style={[animationStyles, style]}
        />
    );
}
