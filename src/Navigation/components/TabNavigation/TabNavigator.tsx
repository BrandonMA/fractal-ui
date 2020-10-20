import React, { useMemo } from 'react';
import { ScreenContainer, ScreenContainerProps } from 'react-native-screens';
import { TabBarItem } from './TabBarItem/TabBarItem';
import { TabScreenContent } from './TabScreenContent';
import styled from 'styled-components/native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { Redirect } from '../../../ReactRouter';
import { TabBarInsetsProvider } from './TabBar/TabBarInsetsProvider';
import { TabBar, TabBarConfig } from './TabBar';
import { TabBarConfigProvider } from './TabBar/TabBarConfigProvider';

const Container = styled.View`
    flex: 1;
    overflow: hidden;
`;

const StyledScreenContainer = styled(ScreenContainer)`
    flex: 1;
`;

export interface TabNavigatorProps extends ScreenContainerProps {
    children: Array<JSX.Element> | JSX.Element;
    defaultRoute?: string;
    tabBarConfig?: TabBarConfig;
}

export function TabNavigator(props: TabNavigatorProps): JSX.Element {
    const { defaultRoute, tabBarConfig, children, ...others } = props;

    const [content, tabItems, firstChildPath] = useMemo(() => {
        const content: Array<JSX.Element> = [];
        const tabItems: Array<JSX.Element> = [];
        let firstChildPath = '';

        React.Children.forEach(children, (child, index) => {
            const { path } = child.props;

            if (index === 0) {
                firstChildPath = child.props.path;
            }

            React.Children.forEach(child.props.children, (subChild: JSX.Element) => {
                if (subChild.type.name === TabScreenContent.name) {
                    const newChild = React.cloneElement(subChild, {
                        path,
                        key: path
                    });
                    content.push(newChild);
                } else if (subChild.type.name === TabBarItem.name) {
                    const newChild = React.cloneElement(subChild, {
                        path,
                        key: path
                    });
                    tabItems.push(newChild);
                }
            });
        });

        return [content, tabItems, firstChildPath];
    }, [children]);

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <TabBarConfigProvider config={tabBarConfig}>
                <TabBarInsetsProvider>
                    <Container>
                        <StyledScreenContainer {...others}>{content}</StyledScreenContainer>
                        <Redirect exact from='/' to={defaultRoute ?? firstChildPath} />
                        <TabBar>{tabItems}</TabBar>
                    </Container>
                </TabBarInsetsProvider>
            </TabBarConfigProvider>
        </SafeAreaProvider>
    );
}
