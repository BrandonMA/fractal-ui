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
import { Platform, View } from 'react-native';
import styled from 'styled-components/native';
var Container = styled(View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: ", ";\n"], ["\n    height: ", ";\n"])), Platform.OS === 'web' ? '100vh' : '100%');
export function Fullscreen(props) {
    return React.createElement(Container, __assign({}, props));
}
var templateObject_1;
//# sourceMappingURL=Fullscreen.js.map