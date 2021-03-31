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
import { AvatarProps } from './types';

const StyledImage = styled(Reanimated.Image)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
` as typeof Reanimated.Image;

export function Avatar({ source, size = 64 }: AvatarProps): JSX.Element {
    return <StyledImage source={{ uri: source }} width={size} height={size} borderRadius={size / 2} />;
}
