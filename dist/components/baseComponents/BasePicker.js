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
import { useRestyle } from '@shopify/restyle';
import { restyleFunctions } from './restyleFunctions';
import { Picker } from '@react-native-picker/picker';
export function BasePicker(props) {
    var restyleProps = useRestyle(restyleFunctions, props);
    return React.createElement(Picker, __assign({}, restyleProps));
}
//# sourceMappingURL=BasePicker.js.map