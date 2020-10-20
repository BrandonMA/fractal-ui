import React, { ReactElement } from 'react';
import { NavigationRoute } from '../NavigationRoute';

export interface TabScreenProps {
    children: JSX.Element;
    path: string;
}

export function TabScreen(props: TabScreenProps): ReactElement<TabScreenProps> {
    const { path, ...others } = props;
    return <NavigationRoute {...others} path={path ?? ''} />;
}
