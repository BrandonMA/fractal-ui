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
import styled from 'styled-components/native';
import { Platform, TextInput } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';
var StyledTextInput = styled(TextInput)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    border-radius: 12px;\n    height: 44px;\n    padding-top: 12px;\n    padding-right: 12px;\n    padding-bottom: 12px;\n    padding-left: ", ";\n"], ["\n    background-color: ", ";\n    border-radius: 12px;\n    height: 44px;\n    padding-top: 12px;\n    padding-right: 12px;\n    padding-bottom: 12px;\n    padding-left: ", ";\n"])), function (props) { return props.backgroundColor; }, function (props) { return (props.paddingLeft ? props.paddingLeft + "px" : '12px'); });
export function BaseTextField(props) {
    var style = props.style, paddingLeft = props.paddingLeft, others = __rest(props, ["style", "paddingLeft"]);
    var fieldColor = useThemeColor('fieldColor');
    var memoizedStyles = useMemo(function () { return [style, { outline: 'none' }]; }, [style]);
    return (React.createElement(StyledTextInput, __assign({}, others, { placeholderTextColor: fieldColor.base300, backgroundColor: fieldColor.base400, style: Platform.OS === 'web' ? memoizedStyles : style, paddingLeft: paddingLeft })));
}
var templateObject_1;
//# sourceMappingURL=BaseTextField.js.map