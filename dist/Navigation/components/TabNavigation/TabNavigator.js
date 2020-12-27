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
import React from 'react';
import { ScreenContainer } from 'react-native-screens';
import styled from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Redirect } from '../../../ReactRouter';
var Container = styled.View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex: 1;\n    overflow: hidden;\n"], ["\n    flex: 1;\n    overflow: hidden;\n"])));
var StyledScreenContainer = styled(ScreenContainer)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    flex: 1;\n"], ["\n    flex: 1;\n"])));
export function TabNavigator(props) {
    var defaultRoute = props.defaultRoute, tabBar = props.tabBar, children = props.children, others = __rest(props, ["defaultRoute", "tabBar", "children"]);
    return (React.createElement(SafeAreaProvider, null,
        React.createElement(Container, null,
            React.createElement(StyledScreenContainer, __assign({}, others), children),
            React.createElement(Redirect, { exact: true, from: '/', to: defaultRoute }),
            tabBar)));
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=TabNavigator.js.map