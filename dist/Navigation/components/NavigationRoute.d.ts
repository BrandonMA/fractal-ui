import React from 'react';
import { ScreenProps, StackPresentationTypes } from 'react-native-screens';
export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path: string;
    children?: React.ReactNode;
    stackPresentation?: StackPresentationTypes;
}
export declare function NavigationRoute(props: NavigationRouteProps): JSX.Element;
