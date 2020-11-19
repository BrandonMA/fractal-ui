import React from 'react';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute';

export function StackScreen(props: NavigationRouteProps): JSX.Element {
    const { children, stackPresentation, ...others } = props;
    const { goBack } = useHistory();

    return (
        <NavigationRoute {...others} stackPresentation={stackPresentation} onDismissed={goBack}>
            {children}
        </NavigationRoute>
    );
}
