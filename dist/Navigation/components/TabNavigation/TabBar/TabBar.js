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
import { useTabBarInsets } from './hooks/useTabBarInsets';
import { TabBarInsetsContext } from './TabBarInsetsProvider';
import { getTabBarComponent } from './util/getTabBarComponent';
import { Animated, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTabBarConfig } from './hooks';
export function TabBar(props) {
    var _a;
    var style = props.style, others = __rest(props, ["style"]);
    var config = useTabBarConfig().config;
    var tabBarHidden = config.tabBarHidden;
    var TabBar = getTabBarComponent(config.tabBarVariant);
    var tabBarInsets = useTabBarInsets((_a = config.tabBarPosition) !== null && _a !== void 0 ? _a : 'bottom', tabBarHidden); // Calculate insets depending on the position of the TabBar for content screens.
    var setInsets = useContext(TabBarInsetsContext).setInsets;
    var insets = useSafeAreaInsets();
    var animatedValue = useRef(new Animated.Value(insets.bottom + 62)).current;
    var animateHiddenChange = useCallback(function (hidden) {
        Animated.spring(animatedValue, { toValue: hidden ? insets.bottom + 62 : 0, useNativeDriver: Platform.OS !== 'web' }).start();
    }, [insets]);
    useEffect(function () {
        animateHiddenChange(tabBarHidden !== null && tabBarHidden !== void 0 ? tabBarHidden : false);
    }, [tabBarHidden, animateHiddenChange]);
    useEffect(function () {
        setInsets(tabBarInsets);
    }, [tabBarInsets, setInsets]);
    return (React.createElement(TabBar, __assign({}, others, { style: [
            style,
            {
                transform: [
                    {
                        translateY: animatedValue
                    }
                ]
            }
        ] })));
}
//# sourceMappingURL=TabBar.js.map