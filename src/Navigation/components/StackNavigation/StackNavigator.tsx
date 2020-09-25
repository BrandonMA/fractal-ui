import React, { useEffect, useMemo, useState } from 'react';
import { matchPath, useLocation } from '../../../ReactRouter';
import { useMatch } from '../../hooks/useMatch';
import { NavigationRouteProps } from '../NavigationRoute';
import styled from 'styled-components/native';
import { ScreenStack as Screen, ScreenStackProps } from 'react-native-screens';

export const ScreenStack = styled(Screen)`
    flex: 1;
`;

export interface StackNavigatorProps extends ScreenStackProps {
    children: React.ReactNode;
    path?: string;
}

export function StackNavigator(props: StackNavigatorProps): JSX.Element {
    const { path, children, ...others } = props;
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

    return <ScreenStack {...others}>{active ? childrenToRender : prevChildren}</ScreenStack>;
}
