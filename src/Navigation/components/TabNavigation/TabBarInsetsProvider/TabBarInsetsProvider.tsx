import React, { createContext, ReactNode, useMemo } from 'react';
import { EdgeInsets } from 'react-native-safe-area-context';
import { useInsets } from '../../../hooks/useInsets';
import { useCurrentTabBarConfig } from '../TabBarConfigProvider/hooks';
import { createTabBarInsetsDependingOnPosition } from './util/createTabBarInsetsDependingOnPosition';
import { constants } from '../../../constants';

interface TabBarInsetsContextType {
    setTabBarInsets: (insets: EdgeInsets) => void;
    tabBarInsets: EdgeInsets;
}

export const TabBarInsetsContext = createContext<TabBarInsetsContextType>({
    setTabBarInsets: () => {
        return;
    },
    tabBarInsets: constants.insetsZero
});

interface Props {
    children: JSX.Element | Array<JSX.Element> | Array<ReactNode>;
}

export function TabBarInsetsProvider(props: Props): JSX.Element {
    const { tabBarConfig } = useCurrentTabBarConfig();
    const [insets, setInsets] = useInsets(createTabBarInsetsDependingOnPosition(tabBarConfig.tabBarPosition));

    const value: TabBarInsetsContextType = useMemo(() => {
        return {
            tabBarInsets: insets,
            setTabBarInsets: setInsets
        };
    }, [insets, setInsets]);

    return <TabBarInsetsContext.Provider value={value}>{props.children}</TabBarInsetsContext.Provider>;
}
