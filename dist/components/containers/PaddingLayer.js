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
import { useTheme } from '../../hooks/useTheme';
import { Layer } from './Layer';
export function PaddingLayer(props) {
    var spacings = useTheme().spacings;
    return React.createElement(Layer, __assign({ padding: spacings.m }, props));
}
//# sourceMappingURL=PaddingLayer.js.map