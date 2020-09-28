import React, { ReactElement, useMemo } from 'react';
import { ScreenContainer, ScreenContainerProps } from 'react-native-screens';
import { TabBarItem } from './TabBarItem';
import { TabContent } from './TabContent';
import { TabScreenProps } from './TabScreen';
import { Redirect, Route } from 'react-router-dom';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { getTabBarComponent } from './util/getTabBarComponent';
import { TabBarVariant } from './types/TabBarVariant';

const StyledScreenContainer = styled(ScreenContainer)`
    flex: 1;
`;

export interface TabNavigatorProps extends ScreenContainerProps {
    children: ReactElement<TabScreenProps> | Array<ReactElement<TabScreenProps>>;
    defaultRoute?: string;
    variant?: TabBarVariant;
}

export function TabNavigator(props: TabNavigatorProps): JSX.Element {
    const { defaultRoute, children, variant, ...others } = props;
    const TabBar = getTabBarComponent(variant);

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
                const newChild = React.cloneElement(subChild, {
                    path,
                    key: path
                });

                if (subChild.type.name === TabContent.name) {
                    content.push(newChild);
                } else if (subChild.type.name === TabBarItem.name) {
                    tabItems.push(newChild);
                }
            });
        });

        return [content, tabItems, firstChildPath];
    }, [children]);

    return (
        <>
            <StyledScreenContainer {...others}>{content}</StyledScreenContainer>
            <SafeAreaView>
                <TabBar>{tabItems}</TabBar>
            </SafeAreaView>
            {firstChildPath != '/' ? (
                <Route path='/'>
                    <Redirect to={defaultRoute ?? firstChildPath} />
                </Route>
            ) : null}
        </>
    );
}
