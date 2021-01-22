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
import { Button } from './Button';
import { GoogleIcon } from '../assets/GoogleIcon';
export function GoogleButton(props) {
    return (React.createElement(Button, __assign({ variant: 'mainInteractiveColor', addShadow: true }, props, { backgroundColor: 'white' }),
        React.createElement(GoogleIcon, { height: 24 })));
}
//# sourceMappingURL=GoogleButton.js.map