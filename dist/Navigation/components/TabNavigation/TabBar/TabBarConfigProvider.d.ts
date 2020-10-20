import React from 'react';
import { TabBarConfig } from './types';
export interface TabBarConfigContextType {
    setConfig: (config: TabBarConfig) => void;
    config: TabBarConfig;
}
export declare const TabBarConfigContext: React.Context<TabBarConfigContextType>;
interface Props {
    children: JSX.Element | Array<JSX.Element> | Array<React.ReactNode>;
    config: TabBarConfig;
}
export declare function TabBarConfigProvider(props: Props): JSX.Element;
export {};
