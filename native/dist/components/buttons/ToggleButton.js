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
import React, { forwardRef } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { BaseButton } from './BaseButton';
export var ToggleButton = forwardRef(function (props, ref) {
    var active = props.active, variant = props.variant, children = props.children, onPress = props.onPress, useGrayVariant = props.useGrayVariant, others = __rest(props, ["active", "variant", "children", "onPress", "useGrayVariant"]);
    var _a = useTheme(), colors = _a.colors, sizes = _a.sizes, borderRadius = _a.borderRadius;
    var backgroundColorName = variant + "InteractiveColor100";
    var backgroundColor = active ? colors[backgroundColorName] : colors.background;
    var pressedColorName = variant + "InteractiveColor200";
    var pressedColor = colors[pressedColorName];
    var colorName = variant + "InteractiveColor";
    var color = active ? colors[colorName] : useGrayVariant ? colors.placeholder : colors.text;
    return (React.createElement(BaseButton, __assign({ ref: ref, height: sizes.interactiveItemHeight, width: '100%', backgroundColor: backgroundColor, pressedBackgroundColor: pressedColor, borderRadius: borderRadius.m, justifyContent: 'center', alignItems: 'center', onPress: onPress, variants: {
            active: {
                backgroundColor: backgroundColor
            },
            inactive: {
                backgroundColor: colors.background
            }
        }, animate: active ? 'active' : 'inactive' }, others), children === null || children === void 0 ? void 0 : children(color)));
});
//# sourceMappingURL=ToggleButton.js.map