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
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { BaseText } from '../baseComponents/BaseText';
import { BaseTouchableOpacity } from '../baseComponents/BaseTouchableOpacity';
export function TextButton(_a) {
    var leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, children = _a.children, textProps = _a.textProps, _b = _a.variant, variant = _b === void 0 ? 'mainInteractiveColor' : _b, others = __rest(_a, ["leftIcon", "rightIcon", "children", "textProps", "variant"]);
    var colors = useTheme().colors;
    return (React.createElement(BaseTouchableOpacity, __assign({ flexDirection: 'row', alignItems: 'center' }, others),
        leftIcon ? leftIcon(colors[variant]) : null,
        children != null ? (React.createElement(BaseText, __assign({ variant: variant }, textProps), children)) : null,
        rightIcon ? rightIcon(colors[variant]) : null));
}
//# sourceMappingURL=TextButton.js.map