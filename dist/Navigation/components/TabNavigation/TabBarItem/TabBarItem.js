var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useHistory, useLocation } from '../../../../ReactRouter';
import { useMatch } from '../../../hooks/useMatch';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';
import { getTabBarItemColorForState } from './util/getTabBarItemColorForState';
export function TabBarItem(props) {
    var path = props.path, activeColor = props.activeColor, inactiveColor = props.inactiveColor, variant = props.variant, tabBarPosition = props.tabBarPosition, title = props.title, children = props.children, others = __rest(props, ["path", "activeColor", "inactiveColor", "variant", "tabBarPosition", "title", "children"]);
    var _a = useState(undefined), tabPathname = _a[0], setTabPathname = _a[1];
    var location = useLocation();
    var history = useHistory();
    var active = useMatch(path)[0];
    var color = getTabBarItemColorForState(active, activeColor, inactiveColor, variant);
    var TabBarItemContainer = getTabBarItemComponent(variant);
    var iconSize = getTabIconSize(variant);
    var goToTab = useCallback(function () {
        if (path != null) {
            if (tabPathname === location.pathname) {
                history.replace(path);
            }
            else {
                history.replace(tabPathname == null ? path : tabPathname);
            }
        }
    }, [path, history, tabPathname, location]);
    useEffect(function () {
        if (path != null && location.pathname.includes(path) && active) {
            setTabPathname(location.pathname);
        }
    }, [path, active, location.pathname]);
    return (<TabBarItemContainer {...others} onPress={goToTab} bg={activeColor} tabBarPosition={tabBarPosition}>
            {children(color, iconSize)}
            {variant === 'circular' ? null : (<Text style={{
        color: color
    }}>
                    {title}
                </Text>)}
        </TabBarItemContainer>);
}
//# sourceMappingURL=TabBarItem.js.map