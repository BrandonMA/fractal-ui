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
import React, { forwardRef } from 'react';
import { useTheme } from '../../core/context/hooks/useTheme';
import { PaddingLayer } from './PaddingLayer';
export var Box = forwardRef(function (props, ref) {
    var _a = useTheme(), colors = _a.colors, borderRadius = _a.borderRadius, shadows = _a.shadows;
    return (React.createElement(PaddingLayer, __assign({ ref: ref, backgroundColor: colors.foreground, borderRadius: borderRadius.m, boxShadow: shadows.mainShadow }, props)));
});
//# sourceMappingURL=Box.js.map