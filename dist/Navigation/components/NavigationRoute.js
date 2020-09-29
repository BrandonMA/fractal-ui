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
import { Screen } from 'react-native-screens';
import { useMatch } from '../hooks/useMatch';
import { Route } from '../../ReactRouter';
import { StyleSheet } from 'react-native';
export function NavigationRoute(props) {
    var path = props.path, style = props.style, children = props.children, stackPresentation = props.stackPresentation, others = __rest(props, ["path", "style", "children", "stackPresentation"]);
    var active = useMatch(path)[0];
    return (<Screen {...others} active={active ? 1 : 0} stackPresentation={stackPresentation !== null && stackPresentation !== void 0 ? stackPresentation : 'push'} style={[StyleSheet.absoluteFill, style]}>
            <Route path={path}>
                {function () {
        return children;
    }}
            </Route>
        </Screen>);
}
//# sourceMappingURL=NavigationRoute.js.map