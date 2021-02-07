import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './types';
import { motion } from 'framer-motion';
import { extractBackgroundColor } from '../../../styles/BackgroundStyles';
import { extractBorderStyles } from '../../../styles/BorderStyles';
import { extractDimensionStyles } from '../../../styles/DimensionStyles';
import { extractDisplayStyles } from '../../../styles/DisplayStyles';
import { useFractalTheme } from '../../../hooks/useFractalTheme';

const StyledButton = styled(motion.button as any)`
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
    border: none;
    ${extractBackgroundColor};
    ${extractDimensionStyles};
    ${extractDisplayStyles};
    ${extractBorderStyles};
`;

export function Button({ onPress, variant, ...others }: ButtonProps): JSX.Element {
    const { colors } = useFractalTheme();
    const colorName = `${variant}InteractiveColor`;

    return <StyledButton backgroundColor={colors[colorName]} {...others} onClick={onPress} />;
}
