import React, { useContext, useEffect } from 'react';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute';
import { CurrentPresentationTypeContext } from '../CurrentPresentationTypeProvider';

export function StackScreen(props: NavigationRouteProps): JSX.Element {
    const { children, stackPresentation, ...others } = props;
    const { goBack } = useHistory();
    const { setType } = useContext(CurrentPresentationTypeContext);

    useEffect(() => {
        setType(stackPresentation ?? 'push');
    }, [setType, stackPresentation]);

    return (
        <NavigationRoute {...others} stackPresentation={stackPresentation} onDismissed={goBack}>
            {children}
        </NavigationRoute>
    );
}
