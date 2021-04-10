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
export function Background(props) {
    var colors = useTheme().colors;
    return React.createElement(Layer, __assign({ backgroundColor: colors.background, flex: 1 }, props));
}
//# sourceMappingURL=Background.js.map