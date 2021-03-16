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
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { ActivityIndicator } from '../ActivityIndicator';
import { BaseButton } from '../buttons/BaseButton';
export function BaseMediaButton(_a) {
    var loading = _a.loading, children = _a.children, _b = _a.activityIndicatorColor, activityIndicatorColor = _b === void 0 ? 'white' : _b, others = __rest(_a, ["loading", "children", "activityIndicatorColor"]);
    var _c = useTheme(), sizes = _c.sizes, borderRadius = _c.borderRadius, shadows = _c.shadows;
    return (React.createElement(BaseButton, __assign({ height: sizes.interactiveItemHeight, width: '100%', borderRadius: borderRadius.m, boxShadow: shadows.mainShadow, justifyContent: 'center', alignItems: 'center' }, others), !loading ? children : React.createElement(ActivityIndicator, { height: 24, width: 24, color: activityIndicatorColor })));
}
//# sourceMappingURL=BaseMediaButton.js.map