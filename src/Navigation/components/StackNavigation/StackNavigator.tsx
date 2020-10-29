import React, { useEffect, useMemo, useState, Children } from 'react';
import { matchPath, useLocation } from '../../../ReactRouter';
import { useMatch } from '../../hooks/useMatch';
import { NavigationRouteProps } from '../NavigationRoute';
import styled from 'styled-components/native';
import { ScreenStack, ScreenStackProps } from './ScreenStack';
import { NavigationBarInsetsProvider } from './NavigationBarInsetsProvider';
import { Platform } from 'react-native';
import { StackScreenModal } from './StackScreenModal';

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
        let arrayOfChildren = Children.toArray(children) as Array<JSX.Element>;
        arrayOfChildren = arrayOfChildren.filter((child: JSX.Element) => {
            const props = child.props as NavigationRouteProps;
            const path = props.path ?? '/';

            const match = matchPath(location.pathname, {
                path
            });

            return match != null;
        });

        if (Platform.OS === 'web') {
            arrayOfChildren = arrayOfChildren.map((child) => {
                const props = child.props as NavigationRouteProps;
                if (props.stackPresentation === 'modal') {
                    return <StackScreenModal key={props.path}>{child}</StackScreenModal>;
                }
                return child;
            });
        }

        return arrayOfChildren;
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
