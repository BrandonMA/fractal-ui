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
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useTabBarInsets } from './hooks/useTabBarInsets';
import { TabBarInsetsContext } from './TabBarInsetsProvider';
import { getTabBarComponent } from './util/getTabBarComponent';
import { useTabBarConfig } from './hooks';
import { Animated, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export function TabBar(props) {
    var _a;
    var config = useTabBarConfig().config;
    var tabBarHidden = config.tabBarHidden;
    var TabBar = getTabBarComponent(config.tabBarVariant);
    var tabBarInsets = useTabBarInsets((_a = config.tabBarPosition) !== null && _a !== void 0 ? _a : 'bottom', config.tabBarHidden); // Calculate insets depending on the position of the TabBar for content screens.
    var setInsets = useContext(TabBarInsetsContext).setInsets;
    var insets = useSafeAreaInsets();
    var animatedValue = useRef(new Animated.Value(insets.bottom + 62)).current;
    var toggleHidden = useCallback(function (hidden) {
        Animated.spring(animatedValue, { toValue: hidden ? insets.bottom + 62 : 0, useNativeDriver: Platform.OS !== 'web' }).start();
    }, [insets]);
    useEffect(function () {
        toggleHidden(tabBarHidden !== null && tabBarHidden !== void 0 ? tabBarHidden : false);
    }, [tabBarHidden, toggleHidden]);
    useEffect(function () {
        setInsets(tabBarInsets);
    }, [tabBarInsets, setInsets]);
    return (React.createElement(TabBar, __assign({}, props, { style: {
            transform: [
                {
                    translateY: animatedValue
                }
            ]
        } })));
}
//# sourceMappingURL=TabBar.js.map