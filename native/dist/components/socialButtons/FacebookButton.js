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
import { FacebookIcon } from '../../assets/FacebookIcon';
import { BaseMediaButton } from './BaseMediaButton';
import { getFacebookButtonAccessibilityProps } from './accessibility/getFacebookButtonAccessibilityProps';
export var FacebookButton = forwardRef(function (props, ref) {
    return (React.createElement(BaseMediaButton, __assign({ ref: ref, backgroundColor: '#3975EA', pressedBackgroundColor: '#295AC9' }, props, getFacebookButtonAccessibilityProps()),
        React.createElement(FacebookIcon, { height: 24, fill: 'white' })));
});
//# sourceMappingURL=FacebookButton.js.map