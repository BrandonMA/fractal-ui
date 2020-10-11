import React, { ReactElement } from 'react';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute';

export interface TabScreenContentProps extends Omit<NavigationRouteProps, 'path'> {
    path?: string;
}

export function TabScreenContent(props: TabScreenContentProps): ReactElement<NavigationRouteProps> {
    const { path, ...others } = props;
    return <NavigationRoute {...others} path={path ?? ''} />;
}
