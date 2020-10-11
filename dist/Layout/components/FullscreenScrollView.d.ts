import React from 'react';
import { ScrollViewProps } from 'react-native';
export interface FullScreenScrollViewProps extends Omit<ScrollViewProps, 'children'> {
    children: React.ReactNode;
}
export declare function FullScreenScrollView(props: FullScreenScrollViewProps): JSX.Element;
