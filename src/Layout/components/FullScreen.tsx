import React from 'react';
import { Animated, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { getFullScreenStyle } from '../util/getFullScreenStyle';
import { useRecoilValue } from 'recoil';
import { presentationTypeAtom } from '../../Navigation/recoil/atoms/presentationTypeAtom';

const Container = styled(Animated.View)`
    ${getFullScreenStyle};
`;

export interface FullScreenProps extends Omit<Animated.AnimatedProps<ViewProps>, 'children'> {
    children: React.ReactNode;
}

export function FullScreen(props: FullScreenProps): JSX.Element {
    const presentationType = useRecoilValue(presentationTypeAtom);
    return <Container {...props} presentationType={presentationType} />;
}
