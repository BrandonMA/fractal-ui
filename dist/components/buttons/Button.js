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
export const Button = forwardRef((props, ref) => {
    const { variant, children, text, addShadow, onPress } = props, others = __rest(props, ["variant", "children", "text", "addShadow", "onPress"]);
    const { borderRadius, colors, sizes, shadows } = useTheme();
    const [pressed, setPressed] = useState(false);
    const colorName = `${variant}InteractiveColor`;
    const color = colors[colorName];
    const pressedColorName = `${variant}InteractiveColor600`;
    const pressedColor = colors[pressedColorName];
    const handleButtonPress = () => {
        setPressed(true);
        onPress === null || onPress === void 0 ? void 0 : onPress();
    };
    return (React.createElement(BaseButton, Object.assign({ ref: ref, height: sizes.interactiveItemHeight, width: '100%', backgroundColor: color, pressedBackgroundColor: pressedColor, borderRadius: borderRadius.m, boxShadow: addShadow ? shadows.mainShadow : undefined, justifyContent: 'center', alignItems: 'center', onPress: handleButtonPress }, others, getButtonAccessibilityProps(pressed)),
        children,
        text != null ? React.createElement(Text, { variant: 'button' }, text) : null));
});
//# sourceMappingURL=Button.js.map