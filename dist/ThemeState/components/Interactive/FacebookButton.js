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
import { white } from '../../baseColors';
import { InternalButton } from './InternalButton/InternalButton';
import { FontAwesome } from '@expo/vector-icons';
export function FacebookButton(props) {
    return (React.createElement(InternalButton, __assign({}, props, { textColor: white.base, backgroundColor: '#3975EA', shadow: '2px 2px 8px rgba(57, 117, 234, 0.4)' }),
        React.createElement(FontAwesome, { name: 'facebook', size: 24, color: 'white' })));
}
//# sourceMappingURL=FacebookButton.js.map