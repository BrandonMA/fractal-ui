import React from 'react';
import { Route, RouteProps } from '../../../ReactRouter';
import { AnimatedRouteContainer } from './AnimatedRouteContainer';

interface AnimatedRouteProps extends Omit<RouteProps, 'children'> {
    children: JSX.Element;
}

export function AnimatedRoute(props: AnimatedRouteProps): JSX.Element {
    const { children, ...others } = props;

    return (
        <Route {...others}>
            {(routeProps) => {
                return <AnimatedRouteContainer {...routeProps}>{children}</AnimatedRouteContainer>;
            }}
        </Route>
    );
}
