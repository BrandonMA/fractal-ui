import React, { useContext, useEffect } from 'react';
import { useTabBarInsets } from '../../../hooks/useTabBarInsets';
import { TabBarInsetsContext } from '../TabBarInsetsProvider';
import { getTabBarComponent } from './util/getTabBarComponent';
export function TabBar(props) {
    var _a;
    var TabBar = getTabBarComponent(props.variant);
    var insets = useTabBarInsets((_a = props.tabBarPosition) !== null && _a !== void 0 ? _a : 'bottom');
    var tabBarInsets = useContext(TabBarInsetsContext);
    useEffect(function () {
        tabBarInsets.setInsets(insets);
    }, [insets, tabBarInsets]);
    return <TabBar {...props}/>;
}
//# sourceMappingURL=TabBar.js.map