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
import React, { useMemo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { getAbsolutePosition } from '../util/getAbsolutePosition';
import { getValueBasedOnPosition } from '../util/getValueBasedOnPosition';
import { applyInsets } from '../util/applyInsets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
var SharedStyles = styled(View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    ", ";\n    ", "\n"], ["\n    position: absolute;\n    ", ";\n    ", "\n"])), function (props) { return getAbsolutePosition(props.position, 0); }, applyInsets);
var HorizontalContainer = styled(SharedStyles)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    height: 60px;\n"], ["\n    width: 100%;\n    height: 60px;\n"])));
var VerticalContainer = styled(SharedStyles)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    height: 100%;\n    width: 60px;\n"], ["\n    height: 100%;\n    width: 60px;\n"])));
var ItemsContainerHorizontal = styled(View)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    flex-direction: row;\n    width: 100%;\n"], ["\n    flex-direction: row;\n    width: 100%;\n"])));
var ItemsContainerVertical = styled(View)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    flex-direction: column;\n    height: 100%;\n"], ["\n    flex-direction: column;\n    height: 100%;\n"])));
var MiddleContainer = styled.View(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: absolute;\n    height: 100%;\n    flex-direction: ", ";\n    width: 100%;\n    ", ";\n"], ["\n    position: absolute;\n    height: 100%;\n    flex-direction: ", ";\n    width: 100%;\n    ", ";\n"])), function (props) { return getValueBasedOnPosition('column', 'row', props.position); }, applyInsets);
var MiddleActionImage = styled.Image(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    z-index: 1000;\n    width: ", ";\n    height: ", ";\n"], ["\n    z-index: 1000;\n    width: ", ";\n    height: ", ";\n"])), function (props) { return getValueBasedOnPosition('88px', '60px', props.position); }, function (props) { return getValueBasedOnPosition('60px', '88px', props.position); });
var SideView = styled.View(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.04);\n    background-color: white;\n    flex-grow: 1;\n    flex-direction: row;\n    flex-basis: 0;\n"], ["\n    box-shadow: 0px -6px 4px rgba(0, 0, 0, 0.04);\n    background-color: white;\n    flex-grow: 1;\n    flex-direction: row;\n    flex-basis: 0;\n"])));
function getImageBasedOnPosition(position) {
    if (position === 'top') {
        return require("../assets/middle-top.png");
    }
    else if (position === 'right') {
        return require("../assets/middle-right.png");
    }
    else if (position === 'left') {
        return require("../assets/middle-left.png");
    }
    else {
        return require("../assets/middle-bottom.png");
    }
}
export function MiddleActionTabBar(props) {
    var children = props.children, others = __rest(props, ["children"]);
    var insets = useSafeAreaInsets();
    var Container = getValueBasedOnPosition(HorizontalContainer, VerticalContainer, props.position);
    var ItemsContainer = getValueBasedOnPosition(ItemsContainerHorizontal, ItemsContainerVertical, props.position);
    var _a = useMemo(function () {
        var allChildren = React.Children.toArray(children);
        var leftChildren = [];
        var rightChildren = [];
        var middleChild = null;
        if (allChildren.length === 1) {
            middleChild = allChildren[0];
        }
        else if (allChildren.length === 3) {
            leftChildren.push(allChildren[0]);
            middleChild = allChildren[1];
            rightChildren.push(allChildren[2]);
        }
        else if (allChildren.length === 5) {
            leftChildren.push(allChildren[0]);
            leftChildren.push(allChildren[1]);
            middleChild = allChildren[2];
            rightChildren.push(allChildren[3]);
            rightChildren.push(allChildren[4]);
        }
        else {
            throw Error('The amount of items in a MiddleActionTabBar must be 1, 3 or 5');
        }
        return [leftChildren, middleChild, rightChildren];
    }, [children]), leftChildren = _a[0], middleChild = _a[1], rightChildren = _a[2];
    return (React.createElement(Container, __assign({}, others, { insets: insets }),
        React.createElement(ItemsContainer, null,
            React.createElement(SideView, null, leftChildren),
            React.createElement(MiddleActionImage, { position: props.position, source: getImageBasedOnPosition(props.position) }),
            React.createElement(SideView, null, rightChildren)),
        React.createElement(MiddleContainer, { position: props.position, insets: insets }, middleChild)));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=MiddleActionTabBar.js.map