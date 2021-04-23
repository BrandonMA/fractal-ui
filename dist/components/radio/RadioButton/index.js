var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef } from 'react';
import { Layer } from '../../containers/Layer';
import { BaseRadioButton } from './BaseRadioButton';
export const RadioButton = forwardRef((_a, ref) => {
    var { label, onPress, active, value } = _a, layerProps = __rest(_a, ["label", "onPress", "active", "value"]);
    return (React.createElement(Layer, Object.assign({ ref: ref }, layerProps),
        React.createElement(BaseRadioButton, { value: value, active: active, onPress: onPress, label: label })));
});
//# sourceMappingURL=index.js.map