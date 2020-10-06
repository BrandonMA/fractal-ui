import React from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';
interface TabBarInsetsContextType {
    setInsets: (insets: EdgeInsets) => void;
    insets: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
}
export declare const TabBarInsetsContext: React.Context<TabBarInsetsContextType>;
interface Props {
    children: JSX.Element | Array<JSX.Element> | Array<React.ReactNode>;
}
export declare function TabBarInsetsProvider(props: Props): JSX.Element;
export {};
