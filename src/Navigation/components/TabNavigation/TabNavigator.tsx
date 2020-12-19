import React from 'react';
import { ScreenContainer, ScreenContainerProps } from 'react-native-screens';
import styled from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Redirect } from '../../../ReactRouter';
import { useThemeColor } from '../../../ThemeState';

interface ContainerProps {
    backgroundColor: string;
}

const Container = styled.View`
    flex: 1;
    overflow: hidden;
    background-color: ${(props: ContainerProps) => props.backgroundColor};
`;

const StyledScreenContainer = styled(ScreenContainer)`
    flex: 1;
`;

export interface TabNavigatorProps extends ScreenContainerProps {
    children: Array<JSX.Element> | JSX.Element;
    defaultRoute: string;
    tabBar: JSX.Element;
}

export function TabNavigator(props: TabNavigatorProps): JSX.Element {
    const { defaultRoute, tabBar, children, ...others } = props;
    const containerColor = useThemeColor('containerColor');

    return (
        <SafeAreaProvider>
            <Container backgroundColor={containerColor.base400}>
                <StyledScreenContainer {...others}>{children}</StyledScreenContainer>
                <Redirect exact from='/' to={defaultRoute} />
                {tabBar}
            </Container>
        </SafeAreaProvider>
    );
}
