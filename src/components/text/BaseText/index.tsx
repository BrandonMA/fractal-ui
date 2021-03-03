import React from 'react';
import styled from 'styled-components';
import { TextProps } from './types';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { extractWebProps } from '../../../sharedProps/WebProps';

const StyledText = styled(motion.span as any)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
    ${extractTextProps};
` as typeof motion.span;

export function BaseText(props: Omit<TextProps, 'variant'>): JSX.Element {
    return <StyledText {...props} />;
}