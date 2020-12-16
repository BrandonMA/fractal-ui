import React from 'react';
import styled from 'styled-components/native';
import { FullScreen, FullScreenProps } from './FullScreen';
import { getInsetsStyle, InsetsStyleConfig } from '../util/getInsetsStyle';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';

const Container = styled(FullScreen)`
    ${getInsetsStyle};
`;

const insetsStyleConfig: InsetsStyleConfig = { type: 'padding', removeHorinzontal: true };

export function SafeAreaFullScreen(props: FullScreenProps): JSX.Element {
    const { totalInsets } = useNavigationInsets();
    return <Container {...props} insets={totalInsets} insetsStyleConfig={insetsStyleConfig} />;
}
