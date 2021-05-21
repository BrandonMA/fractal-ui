import React, { forwardRef, ForwardedRef } from 'react';
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
import { getTextFieldAccessibilityProps } from '../accessibility/getTextInputccessibilityProps';

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

const BaseTextField = forwardRef(
    (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
        const { onChangeText, onKeyDown, placeholder, ...others } = props;
        const handleChange = (event: { target: { value: string } }): void => onChangeText && onChangeText(event.target.value);
        const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>): void => onKeyDown && onKeyDown(event);

        return (
            <StyledTextInput
                ref={ref}
                placeholder={placeholder}
                selectable
                onChange={handleChange}
                onKeyDown={handleKeydown}
                {...others}
                {...getTextFieldAccessibilityProps(placeholder)}
            />
        );
    }
);

BaseTextField.displayName = 'BaseTextField';

export { BaseTextField };
