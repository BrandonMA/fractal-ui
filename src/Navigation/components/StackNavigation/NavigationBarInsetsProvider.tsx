import React, { useMemo } from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';
import { useInsets } from '../../hooks/useInsets';
import { constants } from '../../constants';

interface NavigationBarInsetsContextType {
    setNavigationBarInsets: (insets: EdgeInsets) => void;
    navigationBarInsets: EdgeInsets;
}

export const NavigationBarInsetsContext = React.createContext<NavigationBarInsetsContextType>({
    setNavigationBarInsets: () => {
        return;
    },
    navigationBarInsets: constants.insetsZero
});

interface Props {
    children: JSX.Element;
}

export function NavigationBarInsetsProvider(props: Props): JSX.Element {
    const [insets, setInsets] = useInsets();
    const value: NavigationBarInsetsContextType = useMemo(() => {
        return {
            navigationBarInsets: insets,
            setNavigationBarInsets: setInsets
        };
    }, [insets, setInsets]);
    return <NavigationBarInsetsContext.Provider value={value}>{props.children}</NavigationBarInsetsContext.Provider>;
}
