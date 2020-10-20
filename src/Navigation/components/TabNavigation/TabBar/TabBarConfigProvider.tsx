import React, { useState } from 'react';
import { TabBarConfig } from './types';

const initialValue = Object.freeze<TabBarConfig>({
    tabBarVariant: 'basic',
    tabBarPosition: 'bottom',
    itemActiveColor: '#1281FF',
    itemInactiveColor: '#999999',
    tabBarHidden: false
});

export interface TabBarConfigContextType {
    setConfig: (config: TabBarConfig) => void;
    config: TabBarConfig;
}

export const TabBarConfigContext = React.createContext<TabBarConfigContextType>({
    setConfig: () => {
        return;
    },
    config: initialValue
});

interface Props {
    children: JSX.Element | Array<JSX.Element> | Array<React.ReactNode>;
    config?: TabBarConfig;
}

export function TabBarConfigProvider(props: Props): JSX.Element {
    const [config, setConfig] = useState<TabBarConfig>(props.config ?? initialValue);

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
