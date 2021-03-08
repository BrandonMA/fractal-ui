import React, { useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TextFieldProps } from './types';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { extractWebProps } from '../../../sharedProps/WebProps';
import { extractPlaceholder } from '../../../sharedProps/PlaceholderProps';

const StyledTextInput = styled(motion.input as any)`
    outline: none;
    border-width: 0px;
    ${extractPlaceholder};
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
    ${extractWebProps};
` as typeof motion.input;

export function BaseTextField(props: TextFieldProps): JSX.Element {
    const { onChangeText, placeholder, ...others } = props;

    const handleChange = useCallback(
        (event): void => {
            onChangeText && onChangeText(event.target.value);
        },
        [onChangeText]
    );

    return <StyledTextInput placeholder={placeholder} onChange={handleChange} {...others} />;
}
