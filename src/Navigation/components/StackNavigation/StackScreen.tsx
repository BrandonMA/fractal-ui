import React from 'react';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute/NavigationRoute';

export function StackScreen(props: NavigationRouteProps): JSX.Element {
    const { children, ...others } = props;
    const { goBack } = useHistory();

    return (
        <NavigationRoute {...others} onDismissed={goBack}>
            {children}
        </NavigationRoute>
    );
}
