import React, { useCallback } from 'react';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute';

export function StackScreen(props: NavigationRouteProps): JSX.Element {
    const history = useHistory();

    const handleGoBack = useCallback(() => {
        history.goBack();
    }, [history]);

    return <NavigationRoute {...props} onDismissed={handleGoBack} />;
}
