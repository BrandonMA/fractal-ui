import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
    extractBackgroundProps,
    extractBorderProps,
    extractDimensionProps,
    extractDisplayProps,
    extractShadowProps,
    extractWebProps
} from '../../sharedProps';
import { AvatarProps } from './types';

const StyledImage = styled(motion.img as any)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
`;

export function Avatar({ source, size = 64 }: AvatarProps): JSX.Element {
    return <StyledImage src={source} width={size} height={size} borderRadius={size / 2} />;
}
