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
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps } from '../../sharedProps';
import Reanimated from 'react-native-reanimated';
import { useAnimationStyles } from '../../animations/native/hooks/useAnimationStyles';
var StyledImage = styled(Reanimated.Image)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), extractBackgroundProps, extractDimensionProps, extractDisplayProps, extractBorderProps, extractShadowProps);
export var Image = forwardRef(function (_a, ref) {
    var source = _a.source, resizeMode = _a.resizeMode, style = _a.style, others = __rest(_a, ["source", "resizeMode", "style"]);
    var animationStyles = useAnimationStyles(others);
    return (React.createElement(StyledImage, __assign({ ref: ref, source: typeof source == 'string' ? { uri: source } : source, resizeMode: resizeMode }, others, { style: [animationStyles, style] })));
});
var templateObject_1;
//# sourceMappingURL=index.native.js.map