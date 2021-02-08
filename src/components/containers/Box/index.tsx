import React from 'react';
import styled from 'styled-components';
import { BoxProps } from './types';
import { motion } from 'framer-motion';
import { extractBackgroundColor } from '../../../styles/BackgroundStyles';
import { extractBorderStyles } from '../../../styles/BorderStyles';
import { extractDimensionStyles } from '../../../styles/DimensionStyles';
import { extractDisplayStyles } from '../../../styles/DisplayStyles';
import { extractShadowStyles } from '../../../styles/ShadowStyles';

const StyledBox = styled(motion.div as any)`
    ${extractBackgroundColor};
    ${extractDimensionStyles};
    ${extractDisplayStyles};
    ${extractBorderStyles};
    ${extractShadowStyles};
` as typeof motion.div;

const transition = { type: 'spring' };

export function Box(props: BoxProps): JSX.Element {
    return <StyledBox transition={transition} {...props} />;
}
