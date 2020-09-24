import React, { ReactElement, useMemo } from 'react';
import { ScreenContainer } from 'react-native-screens';
import { TabBar } from './TabBar';
import { TabBarItem } from './TabBarItem';
import { TabContent } from './TabContent';
import { TabScreenProps } from './TabScreen';
import { Redirect, Route } from 'react-router-dom';
import { SafeAreaView } from 'react-native';

export interface TabNavigatorProps {
    children: ReactElement<TabScreenProps> | Array<ReactElement<TabScreenProps>>;
    defaultRoute?: string;
}

export function TabNavigator(props: TabNavigatorProps): JSX.Element {
    const { defaultRoute, children } = props;

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
            <ScreenContainer style={{ flex: 1 }}>{content}</ScreenContainer>
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
