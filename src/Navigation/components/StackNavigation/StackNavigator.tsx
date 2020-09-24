import React, { useEffect, useMemo, useState } from 'react';
import { ScreenStack } from 'react-native-screens';
import { matchPath, useLocation } from '../../../ReactRouter';
import { useMatch } from '../../hooks/useMatch';
import { NavigationRouteProps } from '../NavigationRoute';

export interface StackNavigatorProps {
    children: React.ReactNode;
    path?: string;
}

export function StackNavigator(props: StackNavigatorProps): JSX.Element {
    const { path, children } = props;
    const location = useLocation();
    const [active] = useMatch(path);
    const [prevChildren, setPrevChildren] = useState<Array<React.ReactNode>>([]);

    const childrenToRender = useMemo(() => {
        const childrenToRender = React.Children.toArray(children).filter((child) => {
            const childToRender = child as JSX.Element;
            const path = (childToRender.props as NavigationRouteProps).path ?? '/';

            const match = matchPath(location.pathname, {
                path
            });

            return match != null;
        });

        return childrenToRender;
    }, [children, location]);

    useEffect(() => {
        if (active) {
            setPrevChildren(childrenToRender);
        }
    }, [childrenToRender, active]);

    return <ScreenStack style={{ flex: 1 }}>{active ? childrenToRender : prevChildren}</ScreenStack>;
}
