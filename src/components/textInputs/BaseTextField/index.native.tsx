import React from 'react';
import styled from 'styled-components/native';
import Reanimated from 'react-native-reanimated';
import { TextFieldProps } from './types';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { TextInput } from 'react-native';
import { useAnimationStyles } from '../../../hooks/useAnimationStyles';

const StyledTextInput = styled(Reanimated.createAnimatedComponent(TextInput))`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
` as typeof TextInput;

export function BaseTextField({ style, ...others }: TextFieldProps): JSX.Element {
    const animationStyles = useAnimationStyles(others);
    return <StyledTextInput {...others} style={[animationStyles, style]} />;
}
