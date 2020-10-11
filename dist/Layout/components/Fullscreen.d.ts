import React from 'react';
import { ViewProps } from 'react-native';
export interface FullScreenProps extends Omit<ViewProps, 'children'> {
    children: React.ReactNode;
}
export declare function FullScreen(props: FullScreenProps): JSX.Element;
