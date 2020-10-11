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
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Animated, Platform } from 'react-native';
import { useHistory } from '../../../ReactRouter';
import { NavigationRoute } from '../NavigationRoute';
import { NavigationBarInsetsContext } from './NavigationBarInsetsProvider';
export function StackScreen(props) {
    var visibleOnStack = props.visibleOnStack, style = props.style, initialScreen = props.initialScreen, children = props.children, others = __rest(props, ["visibleOnStack", "style", "initialScreen", "children"]);
    var history = useHistory();
    var fadeAnim = useRef(new Animated.Value(initialScreen ? 1 : 0)).current;
    var childrenArray = React.Children.toArray(children);
    var navigationBarInsets = useContext(NavigationBarInsetsContext);
    var fade = useCallback(function (active) {
        Animated.timing(fadeAnim, {
            toValue: active ? 1 : 0,
            duration: 500,
            useNativeDriver: false
        }).start();
    }, [fadeAnim]);
    var handleGoBack = useCallback(function () {
        history.goBack();
    }, [history]);
    useEffect(function () {
        if (Platform.OS === 'web') {
            fade(visibleOnStack !== null && visibleOnStack !== void 0 ? visibleOnStack : false);
        }
    }, [visibleOnStack, fade]);
    useEffect(function () {
        if (childrenArray.length === 2) {
            var firstChild = childrenArray[0];
            if (firstChild.type === 'RNSScreenStackHeaderConfig' && firstChild.props.hidden === false) {
                var top_1 = 0; // Set the value of the navigation bar for web here. For native it is already inside safeAreaInsets.
                if (top_1 !== navigationBarInsets.insets.top) {
                    navigationBarInsets.setInsets({ top: top_1, right: 0, bottom: 0, left: 0 });
                }
            }
        }
    }, [childrenArray, navigationBarInsets]);
    return (React.createElement(NavigationRoute, __assign({}, others, { style: [style, { opacity: Platform.OS === 'web' ? fadeAnim : 1 }], onDismissed: handleGoBack }), children));
}
//# sourceMappingURL=StackScreen.js.map