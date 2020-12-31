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
import { BaseBox } from '../baseComponents/BaseBox';
export function FullScreen(props) {
    return React.createElement(BaseBox, __assign({}, props, { flexGrow: 1 }));
}
//# sourceMappingURL=FullScreen.js.map