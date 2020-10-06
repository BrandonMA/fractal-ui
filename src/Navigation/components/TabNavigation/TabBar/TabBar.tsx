import React, { useContext, useEffect } from 'react';
import { useTabBarInsets } from '../../../hooks/useTabBarInsets';
import { TabBarInsetsContext } from '../TabBarInsetsProvider';
import { TabBarProps } from './types/TabBarProps';
import { getTabBarComponent } from './util/getTabBarComponent';

export function TabBar(props: TabBarProps): JSX.Element {
    const TabBar = getTabBarComponent(props.variant);
    const insets = useTabBarInsets(props.tabBarPosition ?? 'bottom');
    const tabBarInsets = useContext(TabBarInsetsContext);

    useEffect(() => {
        tabBarInsets.setInsets(insets);
    }, [insets, tabBarInsets]);

    return <TabBar {...props} />;
}
