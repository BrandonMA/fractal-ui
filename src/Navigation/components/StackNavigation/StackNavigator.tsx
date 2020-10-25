import React, { useEffect, useMemo, useState, Children } from 'react';
import { matchPath, useLocation } from '../../../ReactRouter';
import { useMatch } from '../../hooks/useMatch';
import { NavigationRouteProps } from '../NavigationRoute';
import styled from 'styled-components/native';
import { ScreenStack, ScreenStackProps } from './ScreenStack';
import { NavigationBarInsetsProvider } from './NavigationBarInsetsProvider';

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
    const [active] = useMatch(path ?? '/');
    const [prevChildren, setPrevChildren] = useState<Array<JSX.Element>>([]);

    const childrenToRender = useMemo(() => {
        return Children.toArray(children).filter((child: JSX.Element) => {
            const props = child.props as NavigationRouteProps;
            const path = props.path ?? '/';

            const match = matchPath(location.pathname, {
                path
            });

            return match != null;
        }) as Array<JSX.Element>;
    }, [children, location]);

    useEffect(() => {
        if (active) {
            setPrevChildren(childrenToRender);
        }
    }, [childrenToRender, active]);

    return (
        <>
            <NavigationBarInsetsProvider>
                <StyledScreenStack {...others}>{active ? childrenToRender : prevChildren}</StyledScreenStack>
            </NavigationBarInsetsProvider>
        </>
    );
}
