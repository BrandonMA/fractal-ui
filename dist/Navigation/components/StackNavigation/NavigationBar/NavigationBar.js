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
import React, { useContext, useEffect, useMemo } from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { ChevronLeft } from '../../../../Icons/ChevronLeft';
import { NavigationBarInsetsContext } from '../NavigationBarInsetsProvider';
import { useHistory } from '../../../../ReactRouter';
import { useMatch } from '../../../hooks';
var NAVIGATION_BAR_HEIGHT = 50;
var StyledText = styled.Text(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    font-size: 15px;\n"], ["\n    color: ", ";\n    font-size: 15px;\n"])), function (props) { var _a; return (_a = props.color) !== null && _a !== void 0 ? _a : '#1281FF'; });
var StyledTitle = styled(StyledText)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", ";\n    font-weight: 700;\n    font-size: ", "px;\n    text-align: center;\n"], ["\n    color: ", ";\n    font-weight: 700;\n    font-size: ", "px;\n    text-align: center;\n"])), function (props) { var _a; return (props.titleColor != null ? props.titleColor : (_a = props.color) !== null && _a !== void 0 ? _a : '#000000'); }, function (props) { var _a; return (_a = props.titleFontSize) !== null && _a !== void 0 ? _a : 17; });
var Container = styled(View)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    flex-direction: row;\n    justify-content: space-between;\n    height: ", "px;\n    background-color: ", ";\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1000;\n"], ["\n    flex-direction: row;\n    justify-content: space-between;\n    height: ", "px;\n    background-color: ", ";\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 1000;\n"])), NAVIGATION_BAR_HEIGHT, function (props) { return props.backgroundColor; });
var LeftContainer = styled.View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    flex-grow: 1;\n    padding-left: 16px;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    flex-basis: 0;\n"], ["\n    flex-grow: 1;\n    padding-left: 16px;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    flex-basis: 0;\n"])));
var MiddleContainer = styled.View(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    flex-grow: 1;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    flex-basis: 0;\n"], ["\n    flex-grow: 1;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    flex-basis: 0;\n"])));
var RightContainer = styled.View(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    flex-grow: 1;\n    padding-right: 16px;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    flex-basis: 0;\n"], ["\n    flex-grow: 1;\n    padding-right: 16px;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    flex-basis: 0;\n"])));
var StyledBackButtonContainer = styled.TouchableOpacity(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    ", ";\n"], ["\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-start;\n    ", ";\n"])), function () { return (Platform.OS === 'web' ? 'cursor: pointer' : ''); });
export function NavigationBar(props) {
    var _a;
    var hidden = props.hidden, title = props.title, color = props.color, titleFontSize = props.titleFontSize, backgroundColor = props.backgroundColor, titleColor = props.titleColor, hideBackButton = props.hideBackButton, children = props.children;
    var navigationBarInsets = useContext(NavigationBarInsetsContext);
    var history = useHistory();
    var _b = useMatch('/'), activeRoutes = _b[1];
    var _c = useMemo(function () {
        var leftChild = null;
        var centerChild = null;
        var rightChild = null;
        React.Children.forEach(children, function (child) {
            if ((child === null || child === void 0 ? void 0 : child.type.name) === 'NavigationBarLeftView') {
                leftChild = child;
            }
            else if ((child === null || child === void 0 ? void 0 : child.type.name) === 'NavigationBarCenterView') {
                centerChild = child;
            }
            else {
                rightChild = child !== undefined ? child : null;
            }
        });
        return [leftChild, centerChild, rightChild];
    }, [children]), leftChild = _c[0], centerChild = _c[1], rightChild = _c[2];
    var styleProps = {
        backgroundColor: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : 'white',
        color: color,
        titleColor: titleColor,
        titleFontSize: titleFontSize
    };
    useEffect(function () {
        var top = Platform.OS === 'web' && !hidden ? NAVIGATION_BAR_HEIGHT : 0; // Set the value of the navigation bar for web here. For native it is already inside safeAreaInsets.
        if (top !== navigationBarInsets.insets.top) {
            navigationBarInsets.setInsets({ top: top, right: 0, bottom: 0, left: 0 });
        }
    }, [hidden, navigationBarInsets]);
    if (hidden) {
        return null;
    }
    else {
        return (React.createElement(Container, __assign({}, styleProps),
            React.createElement(LeftContainer, null,
                activeRoutes <= 1 || hideBackButton ? null : (React.createElement(StyledBackButtonContainer, { onPress: history.goBack },
                    React.createElement(ChevronLeft, { height: 19, width: 25, fill: (_a = styleProps.color) !== null && _a !== void 0 ? _a : '#1281FF' }),
                    React.createElement(StyledText, __assign({}, styleProps), title))),
                leftChild),
            React.createElement(MiddleContainer, null, centerChild !== null && centerChild !== void 0 ? centerChild : React.createElement(StyledTitle, __assign({}, styleProps), title)),
            React.createElement(RightContainer, null, rightChild)));
    }
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=NavigationBar.js.map