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
import { View } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor';
var StyledContainer = styled(View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    box-shadow: ", ";\n    padding: 16px;\n    border-radius: 12px;\n"], ["\n    background-color: ", ";\n    box-shadow: ", ";\n    padding: 16px;\n    border-radius: 12px;\n"])), function (props) { return props.backgroundColor; }, function (props) { return props.backgroundShadow; });
export function BaseContainer(props) {
    var containerColor = useThemeColor('containerColor');
    return React.createElement(StyledContainer, __assign({}, props, { backgroundColor: containerColor.base, backgroundShadow: containerColor.shadow }));
}
var templateObject_1;
//# sourceMappingURL=BaseContainer.js.map