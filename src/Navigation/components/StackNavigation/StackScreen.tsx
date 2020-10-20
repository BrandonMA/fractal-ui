import React from 'react';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute';

interface StackScreenProps extends NavigationRouteProps {
    visibleOnStack?: boolean;
    initialScreen?: boolean;
}

export function StackScreen(props: StackScreenProps): JSX.Element {
    const { visibleOnStack, initialScreen, children, ...others } = props;
    const history = useHistory();

    return (
        <NavigationRoute {...others} onDismissed={history.goBack}>
            {children}
        </NavigationRoute>
    );
}
