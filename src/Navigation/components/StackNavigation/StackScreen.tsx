import React, { useContext, useEffect } from 'react';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute';
import { CurrentPresentationTypeContext } from '../PresentationTypeProvider';

export function StackScreen(props: NavigationRouteProps): JSX.Element {
    const { children, stackPresentation, ...others } = props;
    const { goBack } = useHistory();
    const { setPresentationType } = useContext(CurrentPresentationTypeContext);

    useEffect(() => {
        setPresentationType(stackPresentation ?? 'push');
    }, [setPresentationType, stackPresentation]);

    return (
        <NavigationRoute {...others} stackPresentation={stackPresentation} onDismissed={goBack}>
            {children}
        </NavigationRoute>
    );
}
