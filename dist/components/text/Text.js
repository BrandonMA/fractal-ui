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
import { useTheme } from '../../hooks/useTheme';
import { BaseText } from './BaseText';
export function Text(_a) {
    var variant = _a.variant, others = __rest(_a, ["variant"]);
    var _b = useTheme(), textVariants = _b.textVariants, colors = _b.colors;
    var _c = textVariants[variant], fontSize = _c.fontSize, fontWeight = _c.fontWeight, color = _c.color, fontFamily = _c.fontFamily;
    var finalColor = colors[color];
    return (React.createElement(BaseText, __assign({ selectable: false, fontFamily: fontFamily, fontSize: fontSize, fontWeight: fontWeight, color: finalColor }, others)));
}
//# sourceMappingURL=Text.js.map