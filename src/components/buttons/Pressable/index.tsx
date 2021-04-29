import React, { forwardRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractWebProps } from '../../../sharedProps/WebProps';
import { PressableProps } from './types';
import { getButtonAccessibilityProps } from '../accessibility/getButtonAccessibilityProps';

const StyledPressable = styled(motion.button as any)`
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

const transition = { type: 'spring' };

export const Pressable = forwardRef(
    ({ onPress, type, ...others }: PressableProps, ref: any): JSX.Element => {
        const [pressed, setPressed] = useState(false);

        const handleButtonPress = useCallback((): void => {
            setPressed(true);
            onPress?.();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <StyledPressable
                ref={ref}
                transition={transition}
                onClick={handleButtonPress}
                {...getButtonAccessibilityProps(pressed, type)}
                {...others}
            />
        );
    }
);
