import React from 'react';
import { Animated, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { getFullScreenStyle } from '../util/getFullScreenStyle';
import { usePresentationType } from '../../Navigation';

const Container = styled(Animated.View)`
    ${getFullScreenStyle};
`;

export interface FullScreenProps extends Omit<Animated.AnimatedProps<ViewProps>, 'children'> {
    children: React.ReactNode;
}

export function FullScreen(props: FullScreenProps): JSX.Element {
    const presentationType = usePresentationType();
    return <Container {...props} presentationType={presentationType} />;
}
