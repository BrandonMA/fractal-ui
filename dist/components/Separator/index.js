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
import { Layer } from '../containers';
import { useTheme } from '../../core/context/hooks/useTheme';
import { getSeparatorAccessibilityProps } from './accessibility/getSeparatorAccessibilityProps';
export var Separator = forwardRef(function (_a, ref) {
    var isAtBackgroundLevel = _a.isAtBackgroundLevel, others = __rest(_a, ["isAtBackgroundLevel"]);
    var colors = useTheme().colors;
    return (React.createElement(Layer, __assign({ ref: ref, height: 1, width: '100%', backgroundColor: isAtBackgroundLevel ? colors.placeholder : colors.background }, others, getSeparatorAccessibilityProps())));
});
//# sourceMappingURL=index.js.map