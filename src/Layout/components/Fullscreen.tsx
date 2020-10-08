import React from 'react';
import { View, ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { applyFullScreenStyles } from '../util/applyFullScreenStyles';

const Container = styled(View)`
    ${applyFullScreenStyles};
`;

export interface FullScreenProps extends Omit<ViewProps, 'children'> {
    children: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export function FullScreen(props: FullScreenProps): JSX.Element {
    return <Container {...props} />;
}
