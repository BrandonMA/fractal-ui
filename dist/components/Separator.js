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
import { BaseBox } from './baseComponents/BaseBox';
export function Separator(props) {
    return React.createElement(BaseBox, __assign({ backgroundColor: 'background' }, props, { height: 1 }));
}
//# sourceMappingURL=Separator.js.map