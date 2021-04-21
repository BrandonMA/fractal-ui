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
import React, { useState, forwardRef } from 'react';
import { Text } from '../text';
import { useTheme } from '../../core/context/hooks/useTheme';
import { BaseButton } from './BaseButton';
import { getButtonAccessibilityProps } from './accessibility/getButtonAccessibilityProps';
export var Button = forwardRef(function (props, ref) {
    var variant = props.variant, children = props.children, text = props.text, addShadow = props.addShadow, onPress = props.onPress, others = __rest(props, ["variant", "children", "text", "addShadow", "onPress"]);
    var _a = useTheme(), borderRadius = _a.borderRadius, colors = _a.colors, sizes = _a.sizes, shadows = _a.shadows;
    var _b = useState(false), pressed = _b[0], setPressed = _b[1];
    var colorName = variant + "InteractiveColor";
    var color = colors[colorName];
    var pressedColorName = variant + "InteractiveColor600";
    var pressedColor = colors[pressedColorName];
    var handleButtonPress = function () {
        setPressed(true);
        onPress === null || onPress === void 0 ? void 0 : onPress();
    };
    return (React.createElement(BaseButton, __assign({ ref: ref, height: sizes.interactiveItemHeight, width: '100%', backgroundColor: color, pressedBackgroundColor: pressedColor, borderRadius: borderRadius.m, boxShadow: addShadow ? shadows.mainShadow : undefined, justifyContent: 'center', alignItems: 'center', onPress: handleButtonPress }, others, getButtonAccessibilityProps(pressed)),
        children,
        text != null ? React.createElement(Text, { variant: 'button' }, text) : null));
});
//# sourceMappingURL=Button.js.map