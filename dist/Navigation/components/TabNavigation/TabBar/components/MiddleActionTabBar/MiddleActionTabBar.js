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
import { Animated, View } from 'react-native';
import styled from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMiddleActionTabBarChildren } from './hooks/useMiddleActionTabBarChildren';
import { MiddleTabBarShape } from './MiddleTabBarShape';
import { getTabBarSafeAreaPadding } from '../../util/getTabBarSafeAreaPadding';
import { constants } from '../../../../../constants';
import { useThemeColor } from '../../../../../../ThemeState';
import { usePositionValues } from '../../hooks/usePositionValues';
import { getValueForTabBarPosition } from '../../util/getValueForTabBarPosition';
var Container = styled(Animated.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    ", "\n    width: ", ";\n    height: ", ";\n"], ["\n    position: absolute;\n    ", "\n    width: ", ";\n    height: ", ";\n"])), function (props) { return props.side; }, function (props) { return props.tabBarWidth; }, function (props) { return props.tabBarHeight; });
var ItemsContainer = styled(View)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: relative;\n    flex-direction: ", ";\n    width: ", ";\n    height: ", ";\n"], ["\n    position: relative;\n    flex-direction: ", ";\n    width: ", ";\n    height: ", ";\n"])), function (props) { return props.flexDirection; }, function (props) { return props.tabBarWidth; }, function (props) { return props.tabBarHeight; });
var SideView = styled.View(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background-color: ", ";\n    flex-grow: 1;\n    flex-basis: 0;\n    flex-direction: ", ";\n    box-shadow: ", ";\n    ", "\n"], ["\n    background-color: ", ";\n    flex-grow: 1;\n    flex-basis: 0;\n    flex-direction: ", ";\n    box-shadow: ", ";\n    ", "\n"])), function (props) { return props.tabBarColor.base; }, function (props) { return props.flexDirection; }, function (props) { return props.tabBarColor.shadow; }, function (props) { return getTabBarSafeAreaPadding(props); });
var MiddleActionImageContainer = styled.View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    z-index: 1000;\n    flex-direction: column;\n    background-color: transparent;\n"], ["\n    z-index: 1000;\n    flex-direction: column;\n    background-color: transparent;\n"])));
var MiddleActionImageContainerFiller = styled.View(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    flex-grow: 1;\n    background-color: ", ";\n    width: 100%;\n"], ["\n    flex-grow: 1;\n    background-color: ", ";\n    width: 100%;\n"])), function (props) { return props.tabBarColor.base; });
var MiddleContainer = styled(Animated.View)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: absolute;\n    ", "\n    width: ", ";\n    height: ", ";\n    flex-direction: column;\n    background-color: transparent;\n    ", ";\n    align-items: center;\n    justify-content: center;\n"], ["\n    position: absolute;\n    ", "\n    width: ", ";\n    height: ", ";\n    flex-direction: column;\n    background-color: transparent;\n    ", ";\n    align-items: center;\n    justify-content: center;\n"])), function (props) { return getTabBarSafeAreaPadding(props); }, function (props) { return props.floatingWidth; }, function (props) { return props.floatingHeight; }, function (props) { return props.floatingPadding; });
export function MiddleActionTabBar(props) {
    var children = props.children, style = props.style, tabBarPosition = props.tabBarPosition;
    var tabBarColor = useThemeColor('tabBarColor');
    var safeAreaInsets = useSafeAreaInsets();
    var _a = useMiddleActionTabBarChildren(children), leftChildren = _a[0], middleChild = _a[1], rightChildren = _a[2];
    var positionValues = usePositionValues(tabBarPosition, safeAreaInsets);
    var constantSize = (tabBarPosition === 'bottom' ? constants.tabBarCircularButtonOffsetBottom : constants.tabBarCircularButtonOffset) + "px";
    var floatingPadding = getValueForTabBarPosition(tabBarPosition, "bottom: " + constantSize, "left: " + constantSize, "right: " + constantSize);
    var constantDimension = 'auto';
    var width = getValueForTabBarPosition(tabBarPosition, '100%', constantDimension, constantDimension);
    var height = getValueForTabBarPosition(tabBarPosition, constantDimension, '100%', '100%');
    return (React.createElement(React.Fragment, null,
        React.createElement(Container, __assign({}, positionValues, { style: style }),
            React.createElement(ItemsContainer, __assign({}, positionValues),
                React.createElement(SideView, __assign({}, positionValues, { tabBarColor: tabBarColor, safeAreaInsets: safeAreaInsets, tabBarPosition: tabBarPosition }), leftChildren),
                React.createElement(MiddleActionImageContainer, null,
                    React.createElement(MiddleTabBarShape, { fill: tabBarColor.base, tabBarPosition: tabBarPosition }),
                    React.createElement(MiddleActionImageContainerFiller, __assign({}, positionValues, { tabBarColor: tabBarColor, safeAreaInsets: safeAreaInsets }))),
                React.createElement(SideView, __assign({}, positionValues, { tabBarColor: tabBarColor, safeAreaInsets: safeAreaInsets, tabBarPosition: tabBarPosition }), rightChildren))),
        React.createElement(MiddleContainer, __assign({}, positionValues, { floatingPadding: floatingPadding, safeAreaInsets: safeAreaInsets, pointerEvents: 'box-none', style: style, floatingHeight: height, tabBarPosition: tabBarPosition, floatingWidth: width }), middleChild)));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=MiddleActionTabBar.js.map