import React from 'react';
import styled from 'styled-components/native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';
import { applyFullscreenInsets } from '../util/applyFullscreenInsets';
import { Fullscreen, FullscreenProps } from './Fullscreen';

const Container = styled(Fullscreen)`
    ${applyFullscreenInsets};
`;

export function SafeAreaFullScreen(props: FullscreenProps): JSX.Element {
    const { totalInsets } = useNavigationInsets();
    return <Container {...props} {...totalInsets} />;
}
