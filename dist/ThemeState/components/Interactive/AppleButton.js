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
import { black, white } from '../../baseColors';
import { InternalButton } from './InternalButton/InternalButton';
import { FontAwesome } from '@expo/vector-icons';
export function AppleButton(props) {
    var text = props.text;
    return (React.createElement(InternalButton, __assign({}, props, { textColor: white.base, backgroundColor: black.base, shadow: black.shadow }),
        React.createElement(FontAwesome, { name: 'apple', size: text != null ? 18 : 24, color: 'white' })));
}
//# sourceMappingURL=AppleButton.js.map