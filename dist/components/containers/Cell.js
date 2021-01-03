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
import { useTheme } from '@shopify/restyle';
import { BaseBox } from '../baseComponents/BaseBox';
export function Cell(props) {
    var theme = useTheme();
    return (React.createElement(BaseBox, __assign({ padding: 'cell', backgroundColor: 'cellColor', borderRadius: 'cellRadius', elevation: 1, shadowColor: 'shadowColor', shadowOffset: theme.shadowProperties.offset, shadowRadius: theme.shadowProperties.radius, shadowOpacity: theme.shadowProperties.opacity }, props)));
}
//# sourceMappingURL=Cell.js.map