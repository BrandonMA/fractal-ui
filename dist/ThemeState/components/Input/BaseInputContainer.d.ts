import React from 'react';
import { ViewProps } from 'react-native';
export interface BaseInputContainerProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}
export declare function BaseInputContainer(props: BaseInputContainerProps): JSX.Element;
