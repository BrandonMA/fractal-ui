import React, { useContext } from 'react';
import { Animated, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { getFullScreenStyle } from '../util/getFullScreenStyle';
import { PresentationTypeContext } from '../../Navigation/components/PresentationTypeProvider';

const Container = styled(Animated.View)`
    ${getFullScreenStyle};
`;

export interface FullScreenProps extends Omit<Animated.AnimatedProps<ViewProps>, 'children'> {
    children: React.ReactNode;
}

export function FullScreen(props: FullScreenProps): JSX.Element {
    const { presentationType } = useContext(PresentationTypeContext);
    return <Container {...props} presentationType={presentationType} />;
}
