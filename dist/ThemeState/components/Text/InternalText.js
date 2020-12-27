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
import styled from 'styled-components/native';
import { getFontSize } from '../util/getFontSize';
var StyledText = styled.Text(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: ", ";\n    color: ", ";\n    font-weight: ", ";\n    text-align: ", ";\n"], ["\n    font-size: ", ";\n    color: ", ";\n    font-weight: ", ";\n    text-align: ", ";\n"])), function (props) { return getFontSize(props.textSize); }, function (props) { return props.color; }, function (props) { return (props.bold ? 'bold' : 'normal'); }, function (props) { var _a; return (_a = props.textAlign) !== null && _a !== void 0 ? _a : 'left'; });
export function InternalText(props) {
    return React.createElement(StyledText, __assign({}, props));
}
var templateObject_1;
//# sourceMappingURL=InternalText.js.map