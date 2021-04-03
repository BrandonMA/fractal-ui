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
import { getAvatarAccessibilityProps } from './accessibility/getAvatarAccessibilityProps';

const StyledImage = styled(motion.img as any)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
`;

export function Avatar({ source, label, size = 64 }: AvatarProps): JSX.Element {
    return <StyledImage src={source} width={size} height={size} borderRadius={size / 2} {...getAvatarAccessibilityProps(label)} />;
}
