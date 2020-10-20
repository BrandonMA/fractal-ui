var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { useHistory, useLocation } from '../../../../ReactRouter';
import { useMatch } from '../../../hooks/useMatch';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';
import { getTabBarItemColorForState } from './util/getTabBarItemColorForState';
import { useTabBarConfig } from '../TabBar/hooks';
import styled from 'styled-components/native';
var StyledText = styled.Text(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), function (props) { return props.color; });
export function TabBarItem(props) {
    var path = props.path, activeColor = props.activeColor, inactiveColor = props.inactiveColor, variant = props.variant, title = props.title, children = props.children, others = __rest(props, ["path", "activeColor", "inactiveColor", "variant", "title", "children"]);
    var _a = useState(undefined), tabPathname = _a[0], setTabPathname = _a[1];
    var config = useTabBarConfig().config;
    var location = useLocation();
    var history = useHistory();
    var active = useMatch(path)[0];
    var color = getTabBarItemColorForState(active, activeColor !== null && activeColor !== void 0 ? activeColor : config.itemActiveColor, inactiveColor !== null && inactiveColor !== void 0 ? inactiveColor : config.itemInactiveColor, variant);
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
    return (React.createElement(TabBarItemContainer, __assign({}, others, config, { onPress: goToTab, bg: activeColor }),
        children(color, iconSize),
        variant === 'circular' ? null : React.createElement(StyledText, { color: color }, title)));
}
var templateObject_1;
//# sourceMappingURL=TabBarItem.js.map