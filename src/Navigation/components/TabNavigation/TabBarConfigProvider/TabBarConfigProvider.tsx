import React, { useState, createContext, ReactNode, useEffect, Dispatch, SetStateAction, useMemo } from 'react';
import { TabBarConfig } from './types';
import { createTabBarConfig } from './util';

export interface TabBarConfigContextType {
    setTabBarConfig: Dispatch<SetStateAction<TabBarConfig>>;
    tabBarConfig: TabBarConfig;
}

export const TabBarConfigContext = createContext<TabBarConfigContextType>({
    setTabBarConfig: () => {
        return;
    },
    tabBarConfig: createTabBarConfig()
});

interface Props {
    children: JSX.Element | Array<JSX.Element> | Array<ReactNode>;
    config: TabBarConfig;
}

export function TabBarConfigProvider(props: Props): JSX.Element {
    const [config, setConfig] = useState<TabBarConfig>(props.config);

    useEffect(() => {
        setConfig(props.config);
    }, [props.config]);

    const value: TabBarConfigContextType = useMemo(() => {
        return {
            tabBarConfig: config,
            setTabBarConfig: setConfig
        };
    }, [config, setConfig]);

    return <TabBarConfigContext.Provider value={value}>{props.children}</TabBarConfigContext.Provider>;
}
