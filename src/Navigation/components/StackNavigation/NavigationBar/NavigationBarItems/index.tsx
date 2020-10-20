import React from 'react';
import { View, ViewProps } from 'react-native';
import styled from 'styled-components/native';

const BaseView = styled(View)`
    flex-direction: row;
`;

interface Props extends Omit<ViewProps, 'children'> {
    children: JSX.Element | Array<JSX.Element>;
}

export function NavigationBarLeftView(props: Props): JSX.Element {
    return <BaseView {...props} />;
}

export function NavigationBarCenterView(props: Props): JSX.Element {
    return <BaseView {...props} />;
}

export function NavigationBarRightView(props: Props): JSX.Element {
    return <BaseView {...props} />;
}
