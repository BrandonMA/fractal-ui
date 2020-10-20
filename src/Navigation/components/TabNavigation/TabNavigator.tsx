import React from 'react';
import { ScreenContainer, ScreenContainerProps } from 'react-native-screens';
import styled from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Redirect } from '../../../ReactRouter';
import { TabBarInsetsProvider } from './TabBar/TabBarInsetsProvider';
import { TabBarConfig, TabBarConfigProvider } from './TabBar';

const Container = styled.View`
    flex: 1;
    overflow: hidden;
`;

const StyledScreenContainer = styled(ScreenContainer)`
    flex: 1;
`;

export interface TabNavigatorProps extends ScreenContainerProps {
    children: Array<JSX.Element> | JSX.Element;
    defaultRoute: string;
    tabBar: JSX.Element;
    tabBarConfig: TabBarConfig;
}

export function TabNavigator(props: TabNavigatorProps): JSX.Element {
    const { defaultRoute, tabBar, tabBarConfig, children, ...others } = props;
    return (
        <SafeAreaProvider>
            <TabBarConfigProvider config={tabBarConfig}>
                <TabBarInsetsProvider>
                    <Container>
                        <StyledScreenContainer {...others}>{children}</StyledScreenContainer>
                        <Redirect exact from='/' to={defaultRoute} />
                        {tabBar}
                    </Container>
                </TabBarInsetsProvider>
            </TabBarConfigProvider>
        </SafeAreaProvider>
    );
}
