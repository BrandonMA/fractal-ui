import React from 'react';
import styled from 'styled-components/native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';
import { applyFullscreenInsets } from '../util/applyFullscreenInsets';
import { FullScreen, FullScreenProps } from './FullScreen';

const Container = styled(FullScreen)`
    ${applyFullscreenInsets};
`;

export function SafeAreaFullScreen(props: FullScreenProps): JSX.Element {
    const { totalInsets } = useNavigationInsets();
    return <Container {...props} {...totalInsets} />;
}
