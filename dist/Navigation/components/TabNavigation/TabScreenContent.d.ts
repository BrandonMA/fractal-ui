import { ReactElement } from 'react';
import { NavigationRouteProps } from '../NavigationRoute';
export interface TabScreenContentProps extends Omit<NavigationRouteProps, 'path'> {
    path?: string;
}
export declare function TabScreenContent(props: TabScreenContentProps): ReactElement<NavigationRouteProps>;
