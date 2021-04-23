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
export const ToggleButton = forwardRef((props, ref) => {
    const { active, variant, children, onPress, useGrayVariant } = props, others = __rest(props, ["active", "variant", "children", "onPress", "useGrayVariant"]);
    const { colors, sizes, borderRadius } = useTheme();
    const backgroundColorName = `${variant}InteractiveColor100`;
    const backgroundColor = active ? colors[backgroundColorName] : colors.background;
    const pressedColorName = `${variant}InteractiveColor200`;
    const pressedColor = colors[pressedColorName];
    const colorName = `${variant}InteractiveColor`;
    const color = active ? colors[colorName] : useGrayVariant ? colors.placeholder : colors.text;
    return (React.createElement(BaseButton, Object.assign({ ref: ref, height: sizes.interactiveItemHeight, width: '100%', backgroundColor: backgroundColor, pressedBackgroundColor: pressedColor, borderRadius: borderRadius.m, justifyContent: 'center', alignItems: 'center', onPress: onPress, variants: {
            active: {
                backgroundColor
            },
            inactive: {
                backgroundColor: colors.background
            }
        }, animate: active ? 'active' : 'inactive' }, others), children === null || children === void 0 ? void 0 : children(color)));
});
//# sourceMappingURL=ToggleButton.js.map