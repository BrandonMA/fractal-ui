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
import { DatePicker } from '../DatePicker';
export function TimePicker(props) {
    return React.createElement(DatePicker, __assign({}, props, { mode: 'time' }));
}
//# sourceMappingURL=index.ios.js.map