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
`;

export function Image({ source, resizeMode, style, ...others }: ImageProps): JSX.Element {
    const animationStyles = useAnimationStyles(others);

    return (
        <StyledImage
            source={typeof source == 'string' ? { uri: source } : source}
            resizeMode={resizeMode}
            {...others}
            style={[animationStyles, style]}
        />
    );
}
