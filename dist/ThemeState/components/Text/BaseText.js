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
import React from 'react';
import styled from 'styled-components/native';
import { useThemeColor } from '../../index';
import { getFontSize } from '../util/getFontSize';
var StyledText = styled.Text(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: ", ";\n    color: ", ";\n    font-weight: ", ";\n"], ["\n    font-size: ", ";\n    color: ", ";\n    font-weight: ", ";\n"])), function (props) { return getFontSize(props.textSize); }, function (props) { return props.color; }, function (props) { return (props.bold ? 'bold' : 'normal'); });
export function BaseText(props) {
    var textType = props.textType, others = __rest(props, ["textType"]);
    var textColor = useThemeColor('textColor');
    var color = function () {
        switch (textType) {
            case 'placeholder':
                return textColor.base300;
            case 'label':
                return textColor.base200;
            default:
                return textColor.base900;
        }
    };
    return React.createElement(StyledText, __assign({}, others, { color: color() }));
}
var templateObject_1;
//# sourceMappingURL=BaseText.js.map