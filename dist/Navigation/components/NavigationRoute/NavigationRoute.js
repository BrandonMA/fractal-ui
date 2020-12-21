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
import React, { useCallback } from 'react';
import { Screen } from 'react-native-screens';
import { Route } from '../../../ReactRouter';
import { StyleSheet } from 'react-native';
import { usePresentationState } from './hooks/usePresentationState';
export function NavigationRoute(props) {
    var path = props.path, style = props.style, children = props.children, stackPresentation = props.stackPresentation, others = __rest(props, ["path", "style", "children", "stackPresentation"]);
    var basepath = path !== null && path !== void 0 ? path : '/';
    var renderChildren = useCallback(function () { return children; }, [children]);
    var show = usePresentationState(basepath, stackPresentation);
    return (React.createElement(Screen, __assign({}, others, { activityState: show, active: show, stackPresentation: stackPresentation !== null && stackPresentation !== void 0 ? stackPresentation : 'push', style: [StyleSheet.absoluteFill, style] }),
        React.createElement(Route, { path: basepath }, renderChildren)));
}
//# sourceMappingURL=NavigationRoute.js.map