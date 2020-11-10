import React, { useState, createContext, ReactNode, useEffect } from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';
import { useTabBarInsetsBasedOnPosition } from './TabBar/hooks';
import { useCurrentTabBarConfig } from './TabBarConfigProvider/hooks';

interface TabBarInsetsContextType {
    setInsets: (insets: EdgeInsets) => void;
    insets: { top: number; right: number; bottom: number; left: number };
}

export const TabBarInsetsContext = createContext<TabBarInsetsContextType>({
    setInsets: () => {
        return;
    },
    insets: { top: 0, right: 0, bottom: 0, left: 0 }
});

interface Props {
    children: JSX.Element | Array<JSX.Element> | Array<ReactNode>;
}

export function TabBarInsetsProvider(props: Props): JSX.Element {
    const [insets, setInsets] = useState({ top: 0, right: 0, bottom: 0, left: 0 });
    const { config } = useCurrentTabBarConfig();
    const tabBarInsets = useTabBarInsetsBasedOnPosition(config.tabBarPosition ?? 'bottom', config.tabBarHidden); // Calculate insets depending on the position of the TabBar for content screens.

    useEffect(() => {
        setInsets(tabBarInsets);
    }, [tabBarInsets, setInsets]);

    return (
        <TabBarInsetsContext.Provider
            value={{
                insets,
                setInsets
            }}
        >
            {props.children}
        </TabBarInsetsContext.Provider>
    );
}
