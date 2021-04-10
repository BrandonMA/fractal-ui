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
import { Text } from '../text';
import { useTheme } from '../../hooks/useTheme';
import { TouchableOpacity } from './TouchableOpacity';
export function TextButton(_a) {
    var variant = _a.variant, children = _a.children, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, textProps = _a.textProps, others = __rest(_a, ["variant", "children", "leftIcon", "rightIcon", "textProps"]);
    var colors = useTheme().colors;
    var colorName = variant + "InteractiveColor";
    var color = colors[colorName];
    return (React.createElement(TouchableOpacity, __assign({}, others),
        leftIcon && leftIcon(color),
        children && (React.createElement(Text, __assign({ variant: 'textButton', color: color }, textProps), children)),
        rightIcon && rightIcon(color)));
}
//# sourceMappingURL=TextButton.js.map