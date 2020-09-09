import React, { ReactElement } from 'react';
import { NativeRouter } from 'react-router-native';
import { ScreenContainer } from 'react-native-screens';
import { TabBar } from './TabBar';
import { TabItem } from './TabItem';
import { TabScreenContent } from './TabScreenContent';
import { TabScreenProps } from './TabScreen';

interface TabNavigatorProps {
    children: ReactElement<TabScreenProps> | Array<ReactElement<TabScreenProps>>;
}

export function TabNavigator(props: TabNavigatorProps): JSX.Element {
    const content: Array<JSX.Element> = [];
    const tabItems: Array<JSX.Element> = [];

    React.Children.map(props.children, (child) => {
        const { path } = child.props;

        React.Children.forEach(child.props.children, (subChild: JSX.Element) => {
            const newChild = React.cloneElement(subChild, {
                path,
                key: path
            });

            if (subChild.type.name === TabScreenContent.name) {
                content.push(newChild);
            } else if (subChild.type.name === TabItem.name) {
                tabItems.push(newChild);
            }
        });
    });

    return (
        <NativeRouter>
            <ScreenContainer style={{ flex: 1 }}>{content}</ScreenContainer>
            <TabBar>{tabItems}</TabBar>
        </NativeRouter>
    );
}
