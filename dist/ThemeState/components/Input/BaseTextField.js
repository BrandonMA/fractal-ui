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
import { TextInput } from 'react-native';
import { useThemeColor } from '../../index';
var StyledTextInput = styled(TextInput)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    border-radius: 12px;\n    height: 44px;\n    padding: 12px;\n"], ["\n    background-color: ", ";\n    border-radius: 12px;\n    height: 44px;\n    padding: 12px;\n"])), function (props) { return props.backgroundColor; });
export function BaseTextField(props) {
    var fieldColor = useThemeColor('fieldColor');
    return React.createElement(StyledTextInput, __assign({}, props, { placeholderTextColor: fieldColor.base300, backgroundColor: fieldColor.base400 }));
}
var templateObject_1;
//# sourceMappingURL=BaseTextField.js.map