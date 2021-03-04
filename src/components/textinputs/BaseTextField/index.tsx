import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TextFieldProps } from './types';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { extractWebProps } from '../../../sharedProps/WebProps';

function extractPlaceholder({ placeholderTextColor }: { placeholderTextColor?: string }): string {
    return `
        ::placeholder {
            color: ${placeholderTextColor ?? 'black'}
        }
    `;
}

function extractPadding({ padding, paddingLeft, paddingRight }: { padding?: number; paddingRight?: number; paddingLeft?: number }): string {
    return `
        padding-left: ${paddingLeft || padding || 0}px;
        padding-right: ${paddingRight || padding || 0}px;
        padding-top: 0px;
        padding-bottom: 0px;
    `;
}

const StyledTextInput = styled(motion.input as any)`
    outline: none;
    border-width: 0px;
    ${extractPlaceholder};
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractPadding};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
    ${extractWebProps};
` as typeof motion.input;

export function BaseTextField(props: TextFieldProps): JSX.Element {
    const { onChangeText, placeholder, ...others } = props;
    return (
        <StyledTextInput
            placeholder={placeholder}
            onChange={(event): void => {
                onChangeText && onChangeText(event.target.value);
            }}
            {...others}
        />
    );
}
