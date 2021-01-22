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
import { AppleIcon } from '../assets/AppleIcon';
export function AppleButton(props) {
    var text = props.text;
    return (React.createElement(Button, __assign({ variant: 'mainInteractiveColor', addShadow: true }, props, { backgroundColor: 'black' }),
        React.createElement(AppleIcon, { height: text != null ? 18 : 24, fill: 'white' })));
}
//# sourceMappingURL=AppleButton.js.map