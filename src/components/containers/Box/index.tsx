import React from 'react';
import styled from 'styled-components';
import { BoxProps } from './types';
import { motion } from 'framer-motion';
import { extractBackgroundColor } from '../../../styles/BackgroundStyles';
import { extractBorderStyles } from '../../../styles/BorderStyles';
import { extractDimensionStyles } from '../../../styles/DimensionStyles';
import { extractDisplayStyles } from '../../../styles/DisplayStyles';

const StyledBox = styled(motion.div as any)`
    ${extractBackgroundColor};
    ${extractDimensionStyles};
    ${extractDisplayStyles};
    ${extractBorderStyles};
` as typeof motion.div;

export function Box(props: BoxProps): JSX.Element {
    return <StyledBox {...props} />;
}
