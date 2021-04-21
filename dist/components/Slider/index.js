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
import { BaseSlider } from './BaseSlider';
import { Layer } from '../containers';
export var Slider = forwardRef(function (_a, ref) {
    var defaultValue = _a.defaultValue, minimumValue = _a.minimumValue, maximumValue = _a.maximumValue, onValueChange = _a.onValueChange, onSlidingStart = _a.onSlidingStart, onSlidingComplete = _a.onSlidingComplete, step = _a.step, name = _a.name, value = _a.value, layerProps = __rest(_a, ["defaultValue", "minimumValue", "maximumValue", "onValueChange", "onSlidingStart", "onSlidingComplete", "step", "name", "value"]);
    return (React.createElement(Layer, __assign({ ref: ref }, layerProps),
        React.createElement(BaseSlider, { defaultValue: defaultValue, minimumValue: minimumValue, maximumValue: maximumValue, onValueChange: onValueChange, onSlidingStart: onSlidingStart, onSlidingComplete: onSlidingComplete, step: step, name: name, value: value })));
});
//# sourceMappingURL=index.js.map