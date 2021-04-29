import React, { forwardRef, useState, useCallback } from 'react';
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
import { getButtonAccessibilityProps } from '../accessibility/getButtonAccessibilityProps';

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

export const TouchableOpacity = forwardRef(
    ({ onPress, onLongPress, whileTap, ...others }: TouchableOpacityProps, ref: any): JSX.Element => {
        const [pressed, setPressed] = useState(false);

        const tapStyles = {
            opacity: 0.4,
            ...whileTap
        };

        const longPressEvent = useLongPress(onLongPress ?? emptyFuntion, {
            isPreventDefault: true,
            delay: 300
        });

        const handleButtonPress = useCallback((): void => {
            setPressed(true);
            onPress?.();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <StyledTouchableOpacity
                ref={ref}
                transition={transition}
                whileTap={tapStyles}
                onClick={handleButtonPress}
                {...longPressEvent}
                {...getButtonAccessibilityProps(pressed)}
                {...others}
            />
        );
    }
);
