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
import { Text } from '../text';
import { useTheme } from '../../hooks/useTheme';
import { BaseButton } from './BaseButton';
export function Button(props) {
    var variant = props.variant, children = props.children, text = props.text, addShadow = props.addShadow;
    var _a = useTheme(), borderRadius = _a.borderRadius, colors = _a.colors, sizes = _a.sizes, shadows = _a.shadows;
    var colorName = variant + "InteractiveColor";
    var color = colors[colorName];
    var pressedColorName = variant + "InteractiveColor600";
    var pressedColor = colors[pressedColorName];
    return (React.createElement(BaseButton, __assign({ height: sizes.interactiveItemHeight, width: '100%', backgroundColor: color, pressedBackgroundColor: pressedColor, borderRadius: borderRadius.m, boxShadow: addShadow ? shadows.mainShadow : undefined, justifyContent: 'center', alignItems: 'center' }, props),
        children,
        text != null ? React.createElement(Text, { variant: 'button' }, text) : null));
}
//# sourceMappingURL=Button.js.map