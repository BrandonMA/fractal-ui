import React, { forwardRef, ForwardedRef } from 'react';
import styled from 'styled-components/native';
import Reanimated from 'react-native-reanimated';
import { TextFieldProps } from './types';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { TextInput } from 'react-native';
import { useAnimationStyles } from '../../../animations/native/hooks/useAnimationStyles';

const StyledTextInput = styled(Reanimated.createAnimatedComponent(TextInput))`
    ${extractBackgroundProps};
    ${extractDimensionProps};
    ${extractDisplayProps};
    ${extractBorderProps};
    ${extractTextProps};
` as typeof TextInput;

const BaseTextField = forwardRef(
    ({ style, onSubmitEditing, ...others }: TextFieldProps, ref: ForwardedRef<TextInput>): JSX.Element => {
        const animationStyles = useAnimationStyles(others);
        const handleKeydown = (): void => onSubmitEditing && onSubmitEditing();

        return <StyledTextInput ref={ref} {...others} style={[animationStyles, style]} onSubmitEditing={handleKeydown} />;
    }
);

BaseTextField.displayName = 'BaseTextField';

export { BaseTextField };
