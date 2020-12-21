import React from 'react';
import { ViewProps } from 'react-native';
export interface BaseContainerProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}
export declare function BaseContainer(props: BaseContainerProps): JSX.Element;
