import React from 'react';
import { Screen, ScreenProps, StackPresentationTypes } from 'react-native-screens';
import { useMatch } from '../hooks/useMatch';
import { Route } from '../../ReactRouter';
import { StyleSheet } from 'react-native';

export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path: string;
    children?: React.ReactNode;
    stackPresentation?: StackPresentationTypes;
}

export function NavigationRoute(props: NavigationRouteProps): JSX.Element {
    const { path, style, children, stackPresentation, ...others } = props;
    const [active] = useMatch(path);

    return (
        <Screen
            {...others}
            active={active ? 1 : 0}
            stackPresentation={stackPresentation ?? 'push'}
            style={[StyleSheet.absoluteFill, style]}
        >
            <Route path={path}>
                {() => {
                    return children;
                }}
            </Route>
        </Screen>
    );
}
