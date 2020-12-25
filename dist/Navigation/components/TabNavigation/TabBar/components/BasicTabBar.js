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
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { useThemeColor } from '../../../../../ThemeState';
import { Animated } from 'react-native';
import { usePositionValues } from '../hooks/usePositionValues';
import { getTabBarSafeAreaPadding } from '../util/getTabBarSafeAreaPadding';
var Container = styled(Animated.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    justify-content: center;\n    position: absolute;\n    ", "\n    background-color: ", ";\n    flex-direction: ", ";\n    width: ", ";\n    height: ", ";\n    box-shadow: ", ";\n    ", "\n"], ["\n    justify-content: center;\n    position: absolute;\n    ", "\n    background-color: ", ";\n    flex-direction: ", ";\n    width: ", ";\n    height: ", ";\n    box-shadow: ", ";\n    ", "\n"])), function (props) { return props.side; }, function (props) { return props.tabBarColor.base; }, function (props) { return props.flexDirection; }, function (props) { return props.tabBarWidth; }, function (props) { return props.tabBarHeight; }, function (props) { return props.tabBarColor.shadow; }, function (props) { return getTabBarSafeAreaPadding(props); });
export function BasicTabBar(props) {
    var tabBarPosition = props.tabBarPosition;
    var tabBarColor = useThemeColor('tabBarColor');
    var safeAreaInsets = useSafeAreaInsets();
    var positionValues = usePositionValues(tabBarPosition);
    return React.createElement(Container, __assign({}, props, { safeAreaInsets: safeAreaInsets, tabBarColor: tabBarColor }, positionValues));
}
var templateObject_1;
//# sourceMappingURL=BasicTabBar.js.map