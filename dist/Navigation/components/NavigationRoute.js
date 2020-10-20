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
import { Screen } from 'react-native-screens';
import { useMatch } from '../hooks/useMatch';
import { Route } from '../../ReactRouter';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
var StyledScreen = styled(Screen)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: white;\n"], ["\n    background-color: white;\n"])));
export function NavigationRoute(props) {
    var path = props.path, style = props.style, children = props.children, stackPresentation = props.stackPresentation, others = __rest(props, ["path", "style", "children", "stackPresentation"]);
    var active = useMatch(path)[0];
    var renderChildren = useMemo(function () { return children; }, [children]);
    return (React.createElement(StyledScreen, __assign({}, others, { active: active ? 1 : 0, stackPresentation: stackPresentation !== null && stackPresentation !== void 0 ? stackPresentation : 'push', style: [StyleSheet.absoluteFill, style] }),
        React.createElement(Route, { path: path }, renderChildren)));
}
var templateObject_1;
//# sourceMappingURL=NavigationRoute.js.map