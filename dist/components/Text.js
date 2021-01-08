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
import React, { memo } from 'react';
import { BaseText } from './baseComponents/BaseText';
export var Text = memo(function (props) {
    return React.createElement(BaseText, __assign({ selectable: false }, props));
});
//# sourceMappingURL=Text.js.map