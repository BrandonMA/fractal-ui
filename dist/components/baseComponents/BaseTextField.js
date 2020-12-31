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
import { TextInput } from 'react-native';
import { useCustomWebStyles } from './hooks/useCustomWebStyles';
export function BaseTextField(props) {
    var restyleProps = useCustomWebStyles({
        outline: 'none'
    }, props);
    return React.createElement(TextInput, __assign({}, restyleProps));
}
//# sourceMappingURL=BaseTextField.js.map