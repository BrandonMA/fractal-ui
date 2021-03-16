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
import { sizes } from '../../themes/lightFractalTheme';
import { BaseTextField } from './BaseTextField';
export function TextField(props) {
    var _a = useTheme(), colors = _a.colors, borderRadius = _a.borderRadius, spacings = _a.spacings;
    return (React.createElement(BaseTextField, __assign({ borderRadius: borderRadius.s, color: colors.text, backgroundColor: colors.textField, placeholderTextColor: colors.placeholder, fontSize: 14, paddingRight: spacings.s, paddingLeft: spacings.s, height: sizes.textFieldHeight }, props)));
}
//# sourceMappingURL=TextField.js.map