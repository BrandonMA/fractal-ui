import React from 'react';
import { ViewProps } from 'react-native';
export interface BaseBackgroundProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}
export declare function BaseBackground(props: BaseBackgroundProps): JSX.Element;
