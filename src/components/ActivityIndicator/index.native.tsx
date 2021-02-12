import React from 'react';
import styled from 'styled-components/native';
import { extractDimensionStyles } from '../../styles/DimensionStyles';
import { ActivityIndicatorProps } from './types';
import { Box } from '../containers';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';

const Container = styled(Box)`
    ${extractDimensionStyles}
`;

const StyledRNActivityIndicator = styled(RNActivityIndicator)`
    width: 100%;
    height: 100%;
`;

export function ActivityIndicator({ color, ...others }: ActivityIndicatorProps): JSX.Element {
    return (
        <Container {...others}>
            <StyledRNActivityIndicator color={color} size='large' />
        </Container>
    );
}
