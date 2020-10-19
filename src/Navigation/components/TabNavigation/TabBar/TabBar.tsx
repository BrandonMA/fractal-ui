import React, { useContext, useEffect } from 'react';
import { useTabBarInsets } from './hooks/useTabBarInsets';
import { TabBarInsetsContext } from '../TabBarInsetsProvider';
import { TabBarProps } from './types/TabBarProps';
import { getTabBarComponent } from './util/getTabBarComponent';
import { useTabBarConfig } from './hooks';

export function TabBar(props: TabBarProps): JSX.Element {
    const TabBar = getTabBarComponent(props.variant);
    const { config } = useTabBarConfig();
    const insets = useTabBarInsets(props.tabBarPosition ?? 'bottom', config.hidden);
    const tabBarInsets = useContext(TabBarInsetsContext);

    useEffect(() => {
        tabBarInsets.setInsets(insets);
    }, [insets, tabBarInsets]);

    return <TabBar {...props} {...config} />;
}
