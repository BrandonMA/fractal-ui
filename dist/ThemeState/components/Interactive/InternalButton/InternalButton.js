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
import { useBaseButtonAnimations } from '../InternalButton/hooks/useBaseButtonAnimations';
import { Animated, Pressable } from 'react-native';
import styled from 'styled-components/native';
import { getCursorStyle, Spacer } from '../../../../Layout';
import { memo } from 'react';
var StyledButton = Animated.createAnimatedComponent(styled(Pressable)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    border-radius: 12px;\n    justify-content: center;\n    align-items: center;\n    box-shadow: ", ";\n    height: 44px;\n    flex-direction: row;\n    ", ";\n"], ["\n    background-color: ", ";\n    border-radius: 12px;\n    justify-content: center;\n    align-items: center;\n    box-shadow: ", ";\n    height: 44px;\n    flex-direction: row;\n    ", ";\n"])), function (props) { return props.backgroundColor; }, function (props) { return props.backgroundShadow; }, getCursorStyle()));
var StyledText = memo(styled.Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-weight: bold;\n    font-size: 17px;\n    color: ", ";\n    text-align: center;\n"], ["\n    font-weight: bold;\n    font-size: 17px;\n    color: ", ";\n    text-align: center;\n"])), function (props) { return props.textColor; }));
export function InternalButton(props) {
    var text = props.text, backgroundColor = props.backgroundColor, textColor = props.textColor, shadow = props.shadow, children = props.children, others = __rest(props, ["text", "backgroundColor", "textColor", "shadow", "children"]);
    var _a = useBaseButtonAnimations(props), handlePressIn = _a[0], handlePressOut = _a[1], finalStyle = _a[2];
    return (React.createElement(StyledButton, __assign({}, others, { onPressIn: handlePressIn, onPressOut: handlePressOut, style: finalStyle, backgroundColor: backgroundColor, backgroundShadow: shadow }),
        children,
        children != null && text != null ? React.createElement(Spacer, { width: 8 }) : null,
        text != null ? (React.createElement(StyledText, { textColor: textColor, selectable: false }, text)) : null));
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=InternalButton.js.map