import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './types';
import { extractBackgroundColor } from '../../../styles/BackgroundStyles';
import { extractBorderStyles } from '../../../styles/BorderStyles';
import { extractDimensionStyles } from '../../../styles/DimensionStyles';
import { extractDisplayStyles } from '../../../styles/DisplayStyles';
import { useFractalTheme } from '../../../hooks/useFractalTheme';
import { Pressable } from 'react-native';

const StyledButton = styled(Pressable as any)`
    ${extractBackgroundColor};
    ${extractDimensionStyles};
    ${extractDisplayStyles};
    ${extractBorderStyles};
`;

export function Button({ variant, ...others }: ButtonProps): JSX.Element {
    const { colors } = useFractalTheme();
    const colorName = `${variant}InteractiveColor`;

    return <StyledButton backgroundColor={colors[colorName]} {...others} />;
}
