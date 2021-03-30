import React from 'react';
import styled from 'styled-components/native';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { ImageBackgroundProps } from './types';

const StyledImageBackground = styled.ImageBackground`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
`;

export function ImageBackground({ source, ...others }: ImageBackgroundProps): JSX.Element {
    return <StyledImageBackground resizeMode={'cover'} source={typeof source == 'string' ? { uri: source } : source} {...others} />;
}
//'cover', 'contain', 'stretch', 'repeat', 'center'
