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
import React, { forwardRef, useState } from 'react';
import { Text } from '../text';
import { useTheme } from '../../context/hooks/useTheme';
import { BaseButton } from './BaseButton';
import { getButtonAccessibilityProps } from './accessibility/getButtonAccessibilityProps';
import { useButtonColors } from './hooks/useButtonColors';
const Button = forwardRef((props, ref) => {
    const { variant, children, text, addShadow, onPress, reduceColor } = props, others = __rest(props, ["variant", "children", "text", "addShadow", "onPress", "reduceColor"]);
    const { borderRadius, sizes, shadows } = useTheme();
    const [pressed, setPressed] = useState(false);
    const [backgroundColor, foregroundColor, pressedColor] = useButtonColors(variant, reduceColor);
    const handleButtonPress = () => {
        setPressed(true);
        onPress === null || onPress === void 0 ? void 0 : onPress();
    };
    return (React.createElement(BaseButton, Object.assign({ ref: ref, width: '100%', height: sizes.interactiveItemHeight, backgroundColor: backgroundColor, pressedBackgroundColor: pressedColor, borderRadius: borderRadius.m, boxShadow: addShadow ? shadows.mainShadow : undefined, justifyContent: 'center', alignItems: 'center', onPress: handleButtonPress }, getButtonAccessibilityProps(pressed), others),
        typeof children === 'function' ? children === null || children === void 0 ? void 0 : children(foregroundColor) : children,
        text != null ? (React.createElement(Text, { variant: 'button', color: foregroundColor }, text)) : null));
});
Button.displayName = 'Button';
export { Button };
//# sourceMappingURL=Button.js.map