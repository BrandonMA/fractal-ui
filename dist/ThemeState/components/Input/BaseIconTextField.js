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
import { View } from 'react-native';
import styled from 'styled-components/native';
import { useThemeColor } from '../../hooks/useThemeColor';
import { BaseTextField } from './BaseTextField';
var iconSize = 16;
var StyledContainer = styled(View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex-direction: row;\n    height: 44px;\n    background-color: ", ";\n    justify-content: center;\n    align-items: center;\n    padding: 0 12px;\n    border-radius: 12px;\n"], ["\n    flex-direction: row;\n    height: 44px;\n    background-color: ", ";\n    justify-content: center;\n    align-items: center;\n    padding: 0 12px;\n    border-radius: 12px;\n"])), function (props) { return props.backgroundColor; });
var StyledLeftImage = styled(View)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    height: ", "px;\n    width: ", "px;\n"], ["\n    height: ", "px;\n    width: ", "px;\n"])), iconSize, iconSize);
var StyledBaseTextField = styled(BaseTextField)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    flex: 1;\n"], ["\n    flex: 1;\n"])));
export function BaseIconTextField(props) {
    var leftImage = props.leftImage, others = __rest(props, ["leftImage"]);
    var fieldColor = useThemeColor('fieldColor');
    return (React.createElement(StyledContainer, { backgroundColor: fieldColor.base400 },
        React.createElement(StyledLeftImage, null, leftImage(fieldColor.base300, iconSize)),
        React.createElement(StyledBaseTextField, __assign({ paddingLeft: 8 }, others))));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=BaseIconTextField.js.map