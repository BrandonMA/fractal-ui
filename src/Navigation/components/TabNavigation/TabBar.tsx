import React from 'react';
import { SafeAreaView, View, ViewProps } from 'react-native';
import styled from 'styled-components/native';

export interface TabBarProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}

const StyledTabBarContainer = styled(View)`
    flex-direction: row;
    justify-content: space-evenly;
    position: absolute;
    width: 100%;
    background-color: white;
    bottom: 0;
`;

export function TabBar(props: TabBarProps): JSX.Element {
    const { children, ...others } = props;
    return (
        <SafeAreaView>
            <StyledTabBarContainer {...others}>{children}</StyledTabBarContainer>
        </SafeAreaView>
    );
}
