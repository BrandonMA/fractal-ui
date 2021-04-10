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
import { Background } from './Background';
import { ActivityIndicator } from '../ActivityIndicator';
import { useTheme } from '../../hooks/useTheme';
export function LoadingBackground(props) {
    var colors = useTheme().colors;
    return (React.createElement(Background, __assign({}, props),
        React.createElement(ActivityIndicator, { color: colors.mainInteractiveColor })));
}
//# sourceMappingURL=LoadingBackground.js.map