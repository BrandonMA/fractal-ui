import React, { useMemo } from 'react';
import styled from 'styled-components';
import { BaseButtonProps } from './types';
import { motion } from 'framer-motion';
import { extractBackgroundColor } from '../../../styles/BackgroundStyles';
import { extractBorderStyles } from '../../../styles/BorderStyles';
import { extractDimensionStyles } from '../../../styles/DimensionStyles';
import { extractDisplayStyles } from '../../../styles/DisplayStyles';
import { extractShadowStyles } from '../../../styles/ShadowStyles';

const StyledButton = styled(motion.button as any)`
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    ${extractBackgroundColor};
    ${extractDimensionStyles};
    ${extractDisplayStyles};
    ${extractBorderStyles};
    ${extractShadowStyles};
`;

const transition = { type: 'spring' };

export function BaseButton({ onPress, pressedBackgroundColor, ...others }: BaseButtonProps): JSX.Element {
    const hoverStyles = useMemo(() => {
        return {
            scale: 1.05
        };
    }, []);

    const tapStyles = useMemo(() => {
        return {
            scale: 0.95,
            backgroundColor: pressedBackgroundColor
        };
    }, [pressedBackgroundColor]);

    return <StyledButton {...others} onClick={onPress} transition={transition} whileHover={hoverStyles} whileTap={tapStyles} />;
}
