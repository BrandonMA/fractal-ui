import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractWebProps } from '../../../sharedProps/WebProps';
import { TouchableOpacityProps } from './types';
import { useLongPress } from '../useLongPress';

const StyledTouchableOpacity = styled(motion.button as any)`
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractShadowProps};
    ${extractWebProps};
` as typeof motion.button;

const transition = { type: 'linear', duration: 0.2 };
const emptyFuntion = () => undefined;

export function TouchableOpacity({ onPress, onLongPress, whileTap, ...others }: TouchableOpacityProps): JSX.Element {
    const tapStyles = {
        opacity: 0.4,
        ...whileTap
    };

    const longPressEvent = useLongPress(onLongPress ?? emptyFuntion, {
        isPreventDefault: true,
        delay: 300
    });

    return <StyledTouchableOpacity transition={transition} whileTap={tapStyles} onClick={onPress} {...longPressEvent} {...others} />;
}
