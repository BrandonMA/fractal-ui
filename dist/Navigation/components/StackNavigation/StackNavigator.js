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
import React, { useEffect, useMemo, useState } from 'react';
import { matchPath, useLocation } from '../../../ReactRouter';
import { useMatch } from '../../hooks/useMatch';
import styled from 'styled-components/native';
import { ScreenStack } from './ScreenStack';
import { NavigationBarInsetsProvider } from './NavigationBarInsetsProvider';
var StyledScreenStack = styled(ScreenStack)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex: 1;\n"], ["\n    flex: 1;\n"])));
export function StackNavigator(props) {
    var path = props.path, children = props.children, others = __rest(props, ["path", "children"]);
    var location = useLocation();
    var active = useMatch(path)[0];
    var _a = useState([]), prevChildren = _a[0], setPrevChildren = _a[1];
    var childrenToRender = useMemo(function () {
        return React.Children.toArray(children).filter(function (child) {
            var _a;
            var path = (_a = child.props.path) !== null && _a !== void 0 ? _a : '/';
            var match = matchPath(location.pathname, {
                path: path
            });
            return match != null;
        });
    }, [children, location]);
    useEffect(function () {
        if (active) {
            setPrevChildren(childrenToRender);
        }
    }, [childrenToRender, active]);
    return (React.createElement(React.Fragment, null,
        React.createElement(NavigationBarInsetsProvider, null,
            React.createElement(StyledScreenStack, __assign({}, others), active ? childrenToRender : prevChildren))));
}
var templateObject_1;
//# sourceMappingURL=StackNavigator.js.map