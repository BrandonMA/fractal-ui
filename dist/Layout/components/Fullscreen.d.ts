import React from 'react';
import { ViewProps } from 'react-native';
export interface FullscreenProps extends Omit<ViewProps, 'children'> {
    children: JSX.Element | Array<JSX.Element> | React.ReactNode;
}
export declare function Fullscreen(props: FullscreenProps): JSX.Element;
