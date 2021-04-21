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
export var RadioButton = forwardRef(function (_a, ref) {
    var label = _a.label, onPress = _a.onPress, active = _a.active, value = _a.value, layerProps = __rest(_a, ["label", "onPress", "active", "value"]);
    return (React.createElement(Layer, __assign({ ref: ref }, layerProps),
        React.createElement(BaseRadioButton, { value: value, active: active, onPress: onPress, label: label })));
});
//# sourceMappingURL=index.js.map