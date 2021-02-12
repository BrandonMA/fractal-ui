import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { extractDimensionStyles } from '../../styles/DimensionStyles';
import { ActivityIndicatorCircleProps, ActivityIndicatorProps } from './types';

const BackgroundCircle = styled(motion.circle)`
    stroke: ${({ color }: ActivityIndicatorCircleProps) => color};
    opacity: 0.2;
`;

const AnimatedSection = styled(motion.circle)`
    stroke: ${({ color }: ActivityIndicatorCircleProps) => color};
    stroke-dasharray: 80;
    stroke-dashoffset: 60;
`;

const Container = styled(motion.div)`
    ${extractDimensionStyles}
`;

const transition = { repeat: Infinity, ease: 'linear', type: 'linear', duration: 0.75 };
const animate = {
    rotate: 360
};

export function ActivityIndicator({ color, ...others }: ActivityIndicatorProps): JSX.Element {
    return (
        <Container animate={animate} transition={transition} {...others}>
            <motion.svg height='100%' width='100%' viewBox='0 0 32 32'>
                <BackgroundCircle cx='16' cy='16' fill='none' r='14' strokeWidth='4' color={color} />
                <AnimatedSection cx='16' cy='16' fill='none' r='14' strokeWidth='4' color={color} />
            </motion.svg>
        </Container>
    );
}
