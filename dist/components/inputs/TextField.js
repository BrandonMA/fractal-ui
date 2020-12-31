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
import { BaseTextField } from '../baseComponents/BaseTextField';
export function TextField(props) {
    var theme = useTheme();
    return (React.createElement(BaseTextField, __assign({ borderRadius: 'm', color: 'textColor', backgroundColor: 'background', placeholderTextColor: theme.colors.placeholderColor, padding: 's', height: theme.interactiveItems.height }, props)));
}
//# sourceMappingURL=TextField.js.map