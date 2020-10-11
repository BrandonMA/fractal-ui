import React from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';
interface NavigationBarInsetsContextType {
    setInsets: (insets: EdgeInsets) => void;
    insets: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
}
export declare const NavigationBarInsetsContext: React.Context<NavigationBarInsetsContextType>;
interface Props {
    children: JSX.Element;
}
export declare function NavigationBarInsetsProvider(props: Props): JSX.Element;
export {};
