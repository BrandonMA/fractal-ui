import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicatorProps } from './types';
import { Layer } from '../containers';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';

const StyledRNActivityIndicator = styled(RNActivityIndicator)`
    width: 100%;
    height: 100%;
`;

export function ActivityIndicator({ color, ...others }: ActivityIndicatorProps): JSX.Element {
    return (
        <Layer {...others}>
            <StyledRNActivityIndicator color={color} size='large' />
        </Layer>
    );
}
