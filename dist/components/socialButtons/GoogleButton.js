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
import { GoogleIcon } from '../../assets/GoogleIcon';
import { BaseMediaButton } from './BaseMediaButton';
import { getGoogleButtonAccessibilityProps } from './accessibility/getGoogleButtonAccessibilityProps';
export var GoogleButton = forwardRef(function (props, ref) {
    return (React.createElement(BaseMediaButton, __assign({ ref: ref, backgroundColor: 'white', pressedBackgroundColor: '#F4F4F4', activityIndicatorColor: 'black' }, props, getGoogleButtonAccessibilityProps()),
        React.createElement(GoogleIcon, { height: 24 })));
});
//# sourceMappingURL=GoogleButton.js.map