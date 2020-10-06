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
import React, { useMemo } from 'react';
import { ScreenContainer } from 'react-native-screens';
import { TabBarItem } from './TabBarItem';
import { TabContent } from './TabContent';
import styled from 'styled-components/native';
import { getTabBarComponent } from './util/getTabBarComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Redirect, Route } from '../../../ReactRouter';
import { StyleSheet } from 'react-native';
var StyledScreenContainer = styled(ScreenContainer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex: 1;\n"], ["\n    flex: 1;\n"])));
export function TabNavigator(props) {
    var defaultRoute = props.defaultRoute, children = props.children, variant = props.variant, position = props.position, activeColor = props.activeColor, inactiveColor = props.inactiveColor, others = __rest(props, ["defaultRoute", "children", "variant", "position", "activeColor", "inactiveColor"]);
    var TabBar = getTabBarComponent(variant);
    var _a = useMemo(function () {
        var content = [];
        var tabItems = [];
        var firstChildPath = '';
        React.Children.map(children, function (child, index) {
            var path = child.props.path;
            if (index === 0) {
                firstChildPath = child.props.path;
            }
            React.Children.forEach(child.props.children, function (subChild) {
                var _a, _b, _c;
                if (subChild.type.name === TabContent.name) {
                    var newChild = React.cloneElement(subChild, {
                        path: path,
                        key: path
                    });
                    content.push(newChild);
                }
                else if (subChild.type.name === TabBarItem.name) {
                    var props_1 = subChild.props;
                    var newChild = React.cloneElement(subChild, {
                        path: path,
                        key: path,
                        activeColor: (_a = props_1.activeColor) !== null && _a !== void 0 ? _a : activeColor,
                        inactiveColor: (_b = props_1.inactiveColor) !== null && _b !== void 0 ? _b : inactiveColor,
                        position: (_c = props_1.position) !== null && _c !== void 0 ? _c : position
                    });
                    tabItems.push(newChild);
                }
            });
        });
        return [content, tabItems, firstChildPath];
    }, [children, activeColor, inactiveColor, position]), content = _a[0], tabItems = _a[1], firstChildPath = _a[2];
    return (React.createElement(SafeAreaProvider, null,
        React.createElement(StyledScreenContainer, __assign({}, others, { style: StyleSheet.absoluteFill }), content),
        React.createElement(TabBar, { position: position !== null && position !== void 0 ? position : 'bottom' }, tabItems),
        firstChildPath != '/' ? (React.createElement(Route, { path: '/' },
            React.createElement(Redirect, { to: defaultRoute !== null && defaultRoute !== void 0 ? defaultRoute : firstChildPath }))) : null));
}
var templateObject_1;
//# sourceMappingURL=TabNavigator.js.map