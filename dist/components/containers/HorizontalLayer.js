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
import React, { forwardRef } from 'react';
import { Layer } from './Layer';
export var HorizontalLayer = forwardRef(function (props, ref) {
    return React.createElement(Layer, __assign({ ref: ref, flexDirection: 'row' }, props));
});
//# sourceMappingURL=HorizontalLayer.js.map