import React from 'react';
import { SafeAreaView, View, ViewProps } from 'react-native';
import styled from 'styled-components/native';

export interface TabBarProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}

const StyledTabBarContainer = styled(SafeAreaView)`
    flex-direction: row;
    justify-content: space-evenly;
    position: absolute;
    width: 100%;
    background-color: white;
    bottom: 0;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.08);
`;

export function BasicTabBar(props: TabBarProps): JSX.Element {
    const { children, ...others } = props;
    return <StyledTabBarContainer {...others}>{children}</StyledTabBarContainer>;
}
