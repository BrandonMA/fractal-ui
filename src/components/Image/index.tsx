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
import { ImageProps } from './types';
import { getImageAccessibilityProps } from './accessibility/getImageAccessibilityProps';

const StyledImage = styled(motion.img as any)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
`;

const transition = { type: 'spring' };

export function Image({ source, label, ...others }: ImageProps): JSX.Element {
    return <StyledImage transition={transition} src={source} {...others} {...getImageAccessibilityProps(label)} />;
}
