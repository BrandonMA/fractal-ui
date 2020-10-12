var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    return React.createElement(TabBar, __assign({}, props));
}
//# sourceMappingURL=TabBar.js.map