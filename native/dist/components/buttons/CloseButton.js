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
import { CloseIcon } from '../../assets/CloseIcon';
import { useTheme } from '../../core/context/hooks/useTheme';
import { BaseButton } from './BaseButton';
export var CloseButton = forwardRef(function (props, ref) {
    var colors = useTheme().colors;
    return (React.createElement(BaseButton, __assign({ ref: ref, height: 24, width: 24, justifyContent: 'center', alignItems: 'center' }, props),
        React.createElement(CloseIcon, { height: 24, width: 24, fill: colors.text })));
});
//# sourceMappingURL=CloseButton.js.map