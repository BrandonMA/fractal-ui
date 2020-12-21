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
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute } from '../NavigationRoute/NavigationRoute';
import { NavigationBar } from './NavigationBar';
import { Platform, StatusBar } from 'react-native';
import { PlatformBar } from './PlatformBar';
import { usePlatformBarStyles } from './PlatformBar/hoooks/usePlatformBarStyles';
export function StackScreen(props) {
    var children = props.children, navBarConfig = props.navBarConfig, stackPresentation = props.stackPresentation, path = props.path, others = __rest(props, ["children", "navBarConfig", "stackPresentation", "path"]);
    var goBack = useHistory().goBack;
    var styleProps = usePlatformBarStyles();
    var isNavigationBarForNativeModal = stackPresentation === 'modal' && navBarConfig != null && (Platform.OS === 'ios' || Platform.OS === 'android');
    return (React.createElement(NavigationRoute, __assign({}, others, { onDismissed: goBack, stackPresentation: stackPresentation, path: path }),
        stackPresentation === 'modal' ? React.createElement(StatusBar, { barStyle: 'light-content' }) : null,
        isNavigationBarForNativeModal ? (React.createElement(NavigationBar, __assign({}, navBarConfig === null || navBarConfig === void 0 ? void 0 : navBarConfig.props, { path: path }))) : navBarConfig != null ? (React.createElement(PlatformBar, __assign({}, navBarConfig === null || navBarConfig === void 0 ? void 0 : navBarConfig.props, styleProps, { path: path }))) : null,
        children));
}
//# sourceMappingURL=StackScreen.js.map