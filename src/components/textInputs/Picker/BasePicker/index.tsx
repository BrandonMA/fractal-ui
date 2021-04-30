import React, { useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractTextProps } from '../../../../sharedProps/TextProps';
import { extractBackgroundProps } from '../../../../sharedProps/BackgroundProps';
import { extractDimensionProps } from '../../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../../sharedProps/DisplayProps';
import { extractBorderProps } from '../../../../sharedProps/BorderProps';
import { extractWebProps } from '../../../../sharedProps/WebProps';
import { BasePickerProps } from './types';
import { getBasePickerAccessibilityProps } from '../../accessibility/getBasePickerAccessibilityProps';

const StyledSelect = styled(motion.select as any)`
    appearance: none;
    cursor: pointer;
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
    ${extractWebProps};
` as typeof motion.select;

export function BasePicker({ onValueChange, enabled, selectedValue, ...others }: BasePickerProps): JSX.Element {
    const handleChange = useCallback<any>(
        (e: { target: { selectedIndex: any; value: any } }) => {
            const { selectedIndex, value } = e.target;
            if (onValueChange) {
                onValueChange(value, selectedIndex);
            }
        },
        [onValueChange]
    );
    return (
        <StyledSelect
            disabled={enabled === false ? true : undefined}
            onChange={handleChange}
            value={selectedValue}
            {...getBasePickerAccessibilityProps()}
            {...others}
        />
    );
}
