import React from 'react';
import { Animated, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { applyFullScreenStyles } from '../util/applyFullScreenStyles';

const Container = styled(Animated.View)`
    ${applyFullScreenStyles};
`;

export interface FullScreenProps extends Omit<Animated.AnimatedProps<ViewProps>, 'children'> {
    children: React.ReactNode;
}

export function FullScreen(props: FullScreenProps): JSX.Element {
    return <Container {...props} />;
}
