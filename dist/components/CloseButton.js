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
import { XIcon } from '../assets/XIcon';
import { useTheme } from '../hooks/useTheme';
import { BaseButton } from './buttons/BaseButton';
export function CloseButton(props) {
    var colors = useTheme().colors;
    return (React.createElement(BaseButton, __assign({ height: 24, width: 24, justifyContent: 'center', alignItems: 'center' }, props),
        React.createElement(XIcon, { height: 24, width: 24, fill: colors.text })));
}
//# sourceMappingURL=CloseButton.js.map