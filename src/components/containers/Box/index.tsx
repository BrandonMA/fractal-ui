import React from 'react';
import styled from 'styled-components';
import { extractLayoutStyles } from '../../../styles/extractLayoutStyles';
import { extractBackgroundColor } from '../../../styles/extractBackgroundColor';
import { BoxProps } from './types';
import { motion } from 'framer-motion';

const StyledBox = styled(motion.div)`
    ${extractBackgroundColor};
    ${extractLayoutStyles};
`;

export function Box(props: BoxProps): JSX.Element {
    return <StyledBox {...props} />;
}
