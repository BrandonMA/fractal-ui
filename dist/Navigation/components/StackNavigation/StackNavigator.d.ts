import React from 'react';
import { ScreenStack as Screen, ScreenStackProps } from './Screens';
export declare const ScreenStack: import("styled-components").StyledComponent<typeof Screen, any, {}, never>;
export interface StackNavigatorProps extends Omit<ScreenStackProps, 'children'> {
    children: React.ReactNode;
    path?: string;
}
export declare function StackNavigator(props: StackNavigatorProps): JSX.Element;
