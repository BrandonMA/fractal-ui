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
import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';
var StyledText = styled.Text(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    font-size: 15px;\n"], ["\n    color: ", ";\n    font-size: 15px;\n"])), function (props) { var _a; return (_a = props.color) !== null && _a !== void 0 ? _a : '#1281FF'; });
var StyledTitle = styled(StyledText)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", ";\n    font-weight: 700;\n    font-size: 17px;\n"], ["\n    color: ", ";\n    font-weight: 700;\n    font-size: 17px;\n"])), function (props) { var _a; return (props.titleColor != null ? props.titleColor : (_a = props.color) !== null && _a !== void 0 ? _a : '#000000'); });
var Container = styled(View)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    flex-direction: row;\n    justify-content: space-between;\n    height: 50px;\n    background-color: ", ";\n"], ["\n    flex-direction: row;\n    justify-content: space-between;\n    height: 50px;\n    background-color: ", ";\n"])), function (props) { return props.backgroundColor; });
var LeftContainer = styled.View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    flex-grow: 1;\n    padding-left: 16px;\n    justify-content: flex-start;\n    flex-direction: row;\n    align-items: center;\n"], ["\n    flex-grow: 1;\n    padding-left: 16px;\n    justify-content: flex-start;\n    flex-direction: row;\n    align-items: center;\n"])));
var MiddleContainer = styled.View(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    flex-grow: 1;\n    justify-content: center;\n    flex-direction: row;\n    align-items: center;\n"], ["\n    flex-grow: 1;\n    justify-content: center;\n    flex-direction: row;\n    align-items: center;\n"])));
var RightContainer = styled.View(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    flex-grow: 1;\n    padding-right: 16px;\n    justify-content: flex-end;\n    flex-direction: row;\n    align-items: center;\n"], ["\n    flex-grow: 1;\n    padding-right: 16px;\n    justify-content: flex-end;\n    flex-direction: row;\n    align-items: center;\n"])));
export function ScreenStackHeaderConfig(props) {
    var hidden = props.hidden, title = props.title, color = props.color, backgroundColor = props.backgroundColor, titleColor = props.titleColor;
    var styleProps = {
        backgroundColor: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : 'white',
        color: color,
        titleColor: titleColor
    };
    if (hidden) {
        return null;
    }
    else {
        return (React.createElement(Container, __assign({}, styleProps),
            React.createElement(LeftContainer, null,
                React.createElement(Pressable, null,
                    React.createElement(StyledText, __assign({}, styleProps), title))),
            React.createElement(MiddleContainer, null,
                React.createElement(StyledTitle, __assign({}, styleProps), title)),
            React.createElement(RightContainer, null)));
    }
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=index.js.map