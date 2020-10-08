import React, { useEffect, useMemo, useState } from 'react';
import { matchPath, useLocation } from '../../../ReactRouter';
import { useMatch } from '../../hooks/useMatch';
import { NavigationRouteProps } from '../NavigationRoute';
import styled from 'styled-components/native';
import { ScreenStack, ScreenStackProps } from './Screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const StyledScreenStack = styled(ScreenStack)`
    flex: 1;
`;

export interface StackNavigatorProps extends Omit<ScreenStackProps, 'children'> {
    children: Array<JSX.Element> | JSX.Element;
    path?: string;
}

export function StackNavigator(props: StackNavigatorProps): JSX.Element {
    const { path, children, ...others } = props;
    const location = useLocation();
    const [active] = useMatch(path);
    const [prevChildren, setPrevChildren] = useState<Array<JSX.Element>>([]);

    const childrenToRender = useMemo(() => {
        const childrenToRender = React.Children.toArray(children).filter((child: JSX.Element) => {
            const path = (child.props as NavigationRouteProps).path ?? '/';

            const match = matchPath(location.pathname, {
                path
            });

            return match != null;
        }) as Array<JSX.Element>;
        return childrenToRender;
    }, [children, location]);

    useEffect(() => {
        if (active) {
            setPrevChildren(childrenToRender);
        }
    }, [childrenToRender, active]);

    return (
        <SafeAreaProvider>
            <StyledScreenStack {...others}>{active ? childrenToRender : prevChildren}</StyledScreenStack>
        </SafeAreaProvider>
    );
}
