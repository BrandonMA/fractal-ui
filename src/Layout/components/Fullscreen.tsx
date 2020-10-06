import React from 'react';
import { Platform, View, ViewProps } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
    height: ${Platform.OS === 'web' ? '100vh' : '100%'};
`;

export interface FullscreenProps extends Omit<ViewProps, 'children'> {
    children: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export function Fullscreen(props: FullscreenProps): JSX.Element {
    return <Container {...props} />;
}
