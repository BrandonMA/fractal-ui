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
import { FacebookIcon } from '../../assets/FacebookIcon';
import { BaseMediaButton } from './BaseMediaButton';
export function FacebookButton(props) {
    return (React.createElement(BaseMediaButton, __assign({ backgroundColor: '#3975EA', pressedBackgroundColor: '#295AC9' }, props),
        React.createElement(FacebookIcon, { height: 24, fill: 'white' })));
}
//# sourceMappingURL=FacebookButton.js.map