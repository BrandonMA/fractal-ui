import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { extractTextProps } from '../../../../sharedProps/TextProps';
import styled from 'styled-components/native';
import { extractBackgroundProps } from '../../../../sharedProps/BackgroundProps';
import { extractDimensionProps } from '../../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../../sharedProps/DisplayProps';
import { extractBorderProps } from '../../../../sharedProps/BorderProps';
import { BasePickerProps } from './types';

const StyledPicker = styled(Picker)`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
` as typeof Picker;

export function BasePicker(props: BasePickerProps): JSX.Element {
    return <StyledPicker {...props} />;
}
