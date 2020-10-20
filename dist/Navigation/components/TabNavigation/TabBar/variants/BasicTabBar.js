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
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { applyDimensionBasedOnTabBarPosition } from '../util/applyDimensionBasedOnTabBarPosition';
import { applyTabBarInsets } from '../util/applyTabBarInsets';
import { getTabBarAbsolutePosition } from '../util/getTabBarAbsolutePosition';
import { getValueBasedOnTabBarPosition } from '../util/getValueBasedOnTabBarPosition';
import { useTabBarConfig } from '../hooks';
var SharedStyles = styled(Animated.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    justify-content: space-evenly;\n    position: absolute;\n    background-color: white;\n    flex-direction: ", ";\n\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    justify-content: space-evenly;\n    position: absolute;\n    background-color: white;\n    flex-direction: ", ";\n\n    ", ";\n    ", ";\n    ", ";\n"])), function (props) { return getValueBasedOnTabBarPosition('row', 'column', props.tabBarPosition); }, function (props) { return getTabBarAbsolutePosition(props.tabBarPosition, 0); }, applyTabBarInsets, applyDimensionBasedOnTabBarPosition);
var HorizontalContainer = styled(SharedStyles)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    box-shadow: ", " 4px rgba(0, 0, 0, 0.08);\n"], ["\n    box-shadow: ", " 4px rgba(0, 0, 0, 0.08);\n"])), function (props) { return (props.tabBarPosition === 'bottom' ? '0px -1px' : '0px 1px'); });
var VerticalContainer = styled(SharedStyles)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    box-shadow: ", " 4px rgba(0, 0, 0, 0.08);\n"], ["\n    box-shadow: ", " 4px rgba(0, 0, 0, 0.08);\n"])), function (props) { return (props.tabBarPosition === 'right' ? '-1px 0px' : '1px 0px'); });
function BaseBasicTabBar(props) {
    var config = useTabBarConfig().config;
    var insets = useSafeAreaInsets(); // Do not confuse this insets with the ones provided by the TabBar itself. This are only safe are insets.
    var Container = getValueBasedOnTabBarPosition(HorizontalContainer, VerticalContainer, config.tabBarPosition);
    return React.createElement(Container, __assign({}, props, config, { tabBarInsets: insets }));
}
export var BasicTabBar = React.memo(BaseBasicTabBar);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=BasicTabBar.js.map