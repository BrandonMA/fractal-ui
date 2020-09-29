import { ReactElement } from 'react';
import { NavigationRouteProps } from '../NavigationRoute';
export interface TabContentProps extends Omit<NavigationRouteProps, 'path'> {
    path?: string;
}
export declare function TabContent(props: TabContentProps): ReactElement<NavigationRouteProps>;
