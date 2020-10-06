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
import { ScrollView } from 'react-native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';
export function FullscreenScrollView(props) {
    var _a = useNavigationInsets(), noSafeAreaInsets = _a.noSafeAreaInsets, totalInsets = _a.totalInsets;
    return (React.createElement(ScrollView, __assign({}, props, { scrollIndicatorInsets: noSafeAreaInsets, contentContainerStyle: {
            paddingTop: totalInsets.top,
            paddingBottom: totalInsets.bottom,
            paddingRight: totalInsets.right,
            paddingLeft: totalInsets.left
        } })));
}
//# sourceMappingURL=FullscreenScrollView.js.map