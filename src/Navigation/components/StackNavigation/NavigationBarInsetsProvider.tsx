import React, { useState } from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';

interface NavigationBarInsetsContextType {
    setInsets: (insets: EdgeInsets) => void;
    insets: { top: number; right: number; bottom: number; left: number };
}

export const NavigationBarInsetsContext = React.createContext<NavigationBarInsetsContextType>({
    setInsets: () => {
        return;
    },
    insets: { top: 0, right: 0, bottom: 0, left: 0 }
});

interface Props {
    children: JSX.Element;
}

export function NavigationBarInsetsProvider(props: Props): JSX.Element {
    const [insets, setInsets] = useState({ top: 0, right: 0, bottom: 0, left: 0 });

    return (
        <NavigationBarInsetsContext.Provider
            value={{
                insets,
                setInsets
            }}
        >
            {props.children}
        </NavigationBarInsetsContext.Provider>
    );
}
