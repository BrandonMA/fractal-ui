import React, { ReactElement, useMemo } from 'react';
import { ScreenContainer, ScreenContainerProps } from 'react-native-screens';
import { TabBarItem, TabBarItemProps } from './TabBarItem';
import { TabContent } from './TabContent';
import { TabScreenProps } from './TabScreen';
import styled from 'styled-components/native';
import { getTabBarComponent } from './util/getTabBarComponent';
import { TabBarVariant } from './types/TabBarVariant';
import { TabBarPosition } from './types/TabBarPosition';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Redirect, Route } from '../../../ReactRouter';

const StyledScreenContainer = styled(ScreenContainer)`
    flex: 1;
`;

export interface TabNavigatorProps extends ScreenContainerProps {
    children: ReactElement<TabScreenProps> | Array<ReactElement<TabScreenProps>>;
    defaultRoute?: string;
    variant?: TabBarVariant;
    activeColor?: string;
    inactiveColor?: string;
    position?: TabBarPosition;
}

export function TabNavigator(props: TabNavigatorProps): JSX.Element {
    const { defaultRoute, children, variant, position, activeColor, inactiveColor, ...others } = props;
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
                if (subChild.type.name === TabContent.name) {
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
                        position: props.position ?? position
                    });
                    tabItems.push(newChild);
                }
            });
        });

        return [content, tabItems, firstChildPath];
    }, [children, activeColor, inactiveColor, position]);

    return (
        <SafeAreaProvider>
            <StyledScreenContainer {...others}>{content}</StyledScreenContainer>
            <TabBar position={position ?? 'bottom'}>{tabItems}</TabBar>
            {firstChildPath != '/' ? (
                <Route path='/'>
                    <Redirect to={defaultRoute ?? firstChildPath} />
                </Route>
            ) : null}
        </SafeAreaProvider>
    );
}
