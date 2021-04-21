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
import styled from 'styled-components';
import { useTheme } from '../core';
import { Layer } from './containers/Layer';
import { TouchableOpacity } from './buttons/TouchableOpacity';
var BubbleTriangleLeft = styled(Layer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    left: 0px;\n    border-color: transparent;\n    border-top-color: ", ";\n    border-top-width: 12px;\n    border-left-width: 8px;\n    border-left-color: transparent;\n    background-color: transparent;\n    border-style: solid;\n"], ["\n    position: absolute;\n    left: 0px;\n    border-color: transparent;\n    border-top-color: ", ";\n    border-top-width: 12px;\n    border-left-width: 8px;\n    border-left-color: transparent;\n    background-color: transparent;\n    border-style: solid;\n"])), function (props) { return props.color; });
var BubbleTriangleRight = styled(Layer)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    right: 0px;\n    border-color: transparent;\n    border-top-color: ", ";\n    border-top-width: 12px;\n    border-right-width: 8px;\n    border-right-color: transparent;\n    background-color: transparent;\n    border-style: solid;\n"], ["\n    position: absolute;\n    right: 0px;\n    border-color: transparent;\n    border-top-color: ", ";\n    border-top-width: 12px;\n    border-right-width: 8px;\n    border-right-color: transparent;\n    background-color: transparent;\n    border-style: solid;\n"])), function (props) { return props.color; });
export var Bubble = forwardRef(function (_a, ref) {
    var children = _a.children, arrowPosition = _a.arrowPosition, color = _a.color, others = __rest(_a, ["children", "arrowPosition", "color"]);
    var _b = useTheme(), shadows = _b.shadows, spacings = _b.spacings, borderRadius = _b.borderRadius;
    return (React.createElement(TouchableOpacity, __assign({ ref: ref }, others),
        React.createElement(Layer, { position: 'relative', maxWidth: '75%', paddingLeft: arrowPosition === 'left' ? 6 : 0, paddingRight: arrowPosition === 'right' ? 6 : 0, flexDirection: 'row', alignSelf: arrowPosition === 'left' ? 'flex-start' : 'flex-end' },
            React.createElement(Layer, { padding: spacings.m, backgroundColor: color, borderRadius: borderRadius.m, borderTopLeftRadius: arrowPosition === 'left' ? 0 : borderRadius.m, borderTopRightRadius: arrowPosition === 'right' ? 0 : borderRadius.m, boxShadow: shadows.mainShadow, width: '100%' }, children),
            arrowPosition == 'left' ? React.createElement(BubbleTriangleLeft, { color: color }) : React.createElement(BubbleTriangleRight, { color: color }))));
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=Bubble.js.map