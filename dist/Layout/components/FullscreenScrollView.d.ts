import React from 'react';
import { ScrollViewProps } from 'react-native';
export interface FullscreenScrollViewProps extends Omit<ScrollViewProps, 'children'> {
    children: JSX.Element | Array<JSX.Element> | React.ReactNode;
}
export declare function FullscreenScrollView(props: FullscreenScrollViewProps): JSX.Element;
