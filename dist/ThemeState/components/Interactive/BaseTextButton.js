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
import { TouchableOpacity } from 'react-native';
import { useThemeColor } from '../../hooks';
import { getFontSize } from '../util/getFontSize';
export var StyledText = styled.Text(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: ", ";\n    color: ", ";\n"], ["\n    font-size: ", ";\n    color: ", ";\n"])), function (props) { return getFontSize(props.textSize); }, function (props) { return props.color; });
export function BaseTextButton(props) {
    var onPress = props.onPress, colorStyle = props.colorStyle, others = __rest(props, ["onPress", "colorStyle"]);
    var interactiveColor = useThemeColor(colorStyle);
    return (React.createElement(TouchableOpacity, { onPress: onPress },
        React.createElement(StyledText, __assign({}, others, { color: interactiveColor.base }))));
}
var templateObject_1;
//# sourceMappingURL=BaseTextButton.js.map