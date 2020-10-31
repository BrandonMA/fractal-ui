import React, { useState, createContext, ReactNode } from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';

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
