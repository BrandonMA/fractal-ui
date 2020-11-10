import React, { useState, createContext, ReactNode, useEffect, Dispatch, SetStateAction } from 'react';
import { TabBarConfig } from './types';
import { createTabBarConfig } from './util';

export interface TabBarConfigContextType {
    setConfig: Dispatch<SetStateAction<TabBarConfig>>;
    config: TabBarConfig;
}

export const TabBarConfigContext = createContext<TabBarConfigContextType>({
    setConfig: () => {
        return;
    },
    config: createTabBarConfig()
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

    return (
        <TabBarConfigContext.Provider
            value={{
                config,
                setConfig
            }}
        >
            {props.children}
        </TabBarConfigContext.Provider>
    );
}
