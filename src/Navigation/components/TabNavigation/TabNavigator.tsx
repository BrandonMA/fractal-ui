import React, { useMemo } from 'react';
import { ScreenContainer, ScreenContainerProps } from 'react-native-screens';
import { TabBarItem, TabBarItemProps } from './TabBarItem/TabBarItem';
import { TabScreenContent } from './TabScreenContent';
import styled from 'styled-components/native';
import { TabBarVariant } from './TabBar/types/TabBarVariant';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Redirect, Route } from '../../../ReactRouter';
import { TabBarInsetsProvider } from './TabBarInsetsProvider';
import { TabBar } from './TabBar';
import { LayoutProps } from '../../../Layout/types/LayoutProps';

const Container = styled.View`
    flex: 1;
    overflow: hidden;
`;

const StyledScreenContainer = styled(ScreenContainer)`
    flex: 1;
`;

export interface TabNavigatorProps extends ScreenContainerProps, LayoutProps {
    children: Array<JSX.Element> | JSX.Element;
    defaultRoute?: string;
    variant?: TabBarVariant;
    activeColor?: string;
    inactiveColor?: string;
}

export function TabNavigator(props: TabNavigatorProps): JSX.Element {
    const { defaultRoute, children, variant, tabBarPosition, activeColor, inactiveColor, ...others } = props;

    const [content, tabItems, firstChildPath] = useMemo(() => {
        const content: Array<JSX.Element> = [];
        const tabItems: Array<JSX.Element> = [];
        let firstChildPath = '';

        React.Children.map(children, (child, index) => {
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
                    const props = subChild.props as TabBarItemProps;
                    const newChild = React.cloneElement(subChild, {
                        path,
                        key: path,
                        activeColor: props.activeColor ?? activeColor,
                        inactiveColor: props.inactiveColor ?? inactiveColor,
                        tabBarPosition: props.tabBarPosition ?? tabBarPosition
                    });
                    tabItems.push(newChild);
                }
            });
        });

        return [content, tabItems, firstChildPath];
    }, [children, activeColor, inactiveColor, tabBarPosition]);

    return (
        <SafeAreaProvider>
            <TabBarInsetsProvider>
                <Container>
                    <StyledScreenContainer {...others}>{content}</StyledScreenContainer>
                    <TabBar variant={variant} tabBarPosition={tabBarPosition ?? 'bottom'}>
                        {tabItems}
                    </TabBar>
                    {firstChildPath != '/' ? (
                        <Route path='/'>
                            <Redirect to={defaultRoute ?? firstChildPath} />
                        </Route>
                    ) : null}
                </Container>
            </TabBarInsetsProvider>
        </SafeAreaProvider>
    );
}
