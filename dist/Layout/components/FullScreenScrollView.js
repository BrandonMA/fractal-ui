var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import { ScrollView, View } from 'react-native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';
import styled from 'styled-components/native';
var Container = styled(View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex: 1;\n"], ["\n    flex: 1;\n"])));
export function FullScreenScrollView(props) {
    var _a = useNavigationInsets(), totalInsets = _a.totalInsets, tabBarInsets = _a.tabBarInsets;
    return (React.createElement(Container, null,
        React.createElement(ScrollView, __assign({}, props, { scrollIndicatorInsets: tabBarInsets, contentContainerStyle: {
                paddingTop: totalInsets.top,
                paddingBottom: totalInsets.bottom,
                paddingRight: totalInsets.right,
                paddingLeft: totalInsets.left
            } }))));
}
var templateObject_1;
//# sourceMappingURL=FullScreenScrollView.js.map