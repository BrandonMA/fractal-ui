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
import { ActivityIndicator } from '../ActivityIndicator';
export function LoadingBackground(props) {
    return (React.createElement(BaseBox, __assign({ justifyContent: 'center', alignItems: 'center', flex: 1 }, props),
        React.createElement(ActivityIndicator, { size: 'large', color: 'textColor' })));
}
//# sourceMappingURL=LoadingBackground.js.map