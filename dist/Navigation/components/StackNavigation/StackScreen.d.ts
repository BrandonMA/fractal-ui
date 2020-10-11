/// <reference types="react" />
import { NavigationRouteProps } from '../NavigationRoute';
interface StackScreenProps extends NavigationRouteProps {
    visibleOnStack?: boolean;
    initialScreen?: boolean;
}
export declare function StackScreen(props: StackScreenProps): JSX.Element;
export {};
