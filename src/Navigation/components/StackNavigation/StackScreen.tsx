import React from 'react';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute';

export function StackScreen(props: NavigationRouteProps): JSX.Element {
    const { children, ...others } = props;
    const history = useHistory();

    return (
        <NavigationRoute {...others} onDismissed={history.goBack}>
            {children}
        </NavigationRoute>
    );
}
