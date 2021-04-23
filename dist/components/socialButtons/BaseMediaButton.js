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
import { useTheme } from '../../core/context/hooks/useTheme';
import { ActivityIndicator } from '../ActivityIndicator';
import { BaseButton } from '../buttons/BaseButton';
export const BaseMediaButton = forwardRef((_a, ref) => {
    var { loading, children, activityIndicatorColor = 'white' } = _a, others = __rest(_a, ["loading", "children", "activityIndicatorColor"]);
    const { sizes, borderRadius, shadows } = useTheme();
    return (React.createElement(BaseButton, Object.assign({ ref: ref, height: sizes.interactiveItemHeight, width: '100%', borderRadius: borderRadius.m, boxShadow: shadows.mainShadow, justifyContent: 'center', alignItems: 'center' }, others), !loading ? children : React.createElement(ActivityIndicator, { height: 24, width: 24, color: activityIndicatorColor })));
});
//# sourceMappingURL=BaseMediaButton.js.map