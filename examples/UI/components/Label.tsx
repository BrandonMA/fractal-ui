import styled from 'styled-components/native';
import { colors } from '../../../src/ThemeState/Colors';
import { memo } from 'react';

export const Label = memo(styled.Text`
    color: ${colors.white.base300};
`);
