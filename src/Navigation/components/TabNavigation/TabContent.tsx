import React, { ReactElement } from 'react';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute';

export interface TabContentProps extends Omit<NavigationRouteProps, 'path'> {
    path?: string;
}

export function TabContent(props: TabContentProps): ReactElement<NavigationRouteProps> {
    const { path, ...others } = props;
    return <NavigationRoute {...others} path={path ?? ''} />;
}
