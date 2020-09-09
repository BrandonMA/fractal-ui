import React from 'react';
import { Screen, ScreenProps } from 'react-native-screens';
import { useMatch } from '../hooks/useMatch';
import { Route } from '../../NavigationItems';
import { StyleSheet } from 'react-native';

interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation'> {
    path?: string;
    children: React.ReactNode;
}

export function NavigationRoute(props: NavigationRouteProps): JSX.Element {
    const { path, children, ...others } = props;
    const [active] = useMatch(path);
    return (
        <Screen {...others} active={active ? 1 : 0} stackPresentation='push' style={StyleSheet.absoluteFill}>
            <Route path={path}>
                {() => {
                    return children;
                }}
            </Route>
        </Screen>
    );
}
