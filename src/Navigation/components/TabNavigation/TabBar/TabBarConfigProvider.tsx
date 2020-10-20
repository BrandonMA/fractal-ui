import React, { useState } from 'react';
import { createTabBarConfig, TabBarConfig } from './types';

export interface TabBarConfigContextType {
    setConfig: (config: TabBarConfig) => void;
    config: TabBarConfig;
}

export const TabBarConfigContext = React.createContext<TabBarConfigContextType>({
    setConfig: () => {
        return;
    },
    config: createTabBarConfig()
});

interface Props {
    children: JSX.Element | Array<JSX.Element> | Array<React.ReactNode>;
    config: TabBarConfig;
}

export function TabBarConfigProvider(props: Props): JSX.Element {
    const [config, setConfig] = useState<TabBarConfig>(props.config);

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
