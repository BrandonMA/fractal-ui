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
import styled from 'styled-components/native';
import { Layer } from '../containers';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';
var StyledRNActivityIndicator = styled(RNActivityIndicator)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n"], ["\n    width: 100%;\n    height: 100%;\n"])));
export var ActivityIndicator = forwardRef(function (_a, ref) {
    var color = _a.color, others = __rest(_a, ["color"]);
    return (React.createElement(Layer, __assign({ ref: ref }, others),
        React.createElement(StyledRNActivityIndicator, { color: color, size: 'large' })));
});
var templateObject_1;
//# sourceMappingURL=index.native.js.map