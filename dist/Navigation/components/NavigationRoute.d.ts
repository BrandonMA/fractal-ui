/// <reference types="react" />
import { ScreenProps, StackPresentationTypes } from 'react-native-screens';
export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path: string;
    children: Array<JSX.Element> | JSX.Element;
    stackPresentation?: StackPresentationTypes;
}
export declare function NavigationRoute(props: NavigationRouteProps): JSX.Element;
