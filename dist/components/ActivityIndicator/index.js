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
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Layer } from '../containers/Layer';
var BackgroundCircle = styled(motion.circle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    stroke: ", ";\n    opacity: 0.2;\n"], ["\n    stroke: ", ";\n    opacity: 0.2;\n"])), function (_a) {
    var color = _a.color;
    return color;
});
var AnimatedSection = styled(motion.circle)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    stroke: ", ";\n    stroke-dasharray: 80;\n    stroke-dashoffset: 60;\n"], ["\n    stroke: ", ";\n    stroke-dasharray: 80;\n    stroke-dashoffset: 60;\n"])), function (_a) {
    var color = _a.color;
    return color;
});
var transition = { repeat: Infinity, ease: 'linear', type: 'linear', duration: 0.75 };
var animate = {
    rotate: 360
};
export function ActivityIndicator(_a) {
    var color = _a.color, others = __rest(_a, ["color"]);
    return (React.createElement(Layer, __assign({ animate: animate, transition: transition }, others),
        React.createElement(motion.svg, { height: '100%', width: '100%', viewBox: '0 0 32 32' },
            React.createElement(BackgroundCircle, { cx: '16', cy: '16', fill: 'none', r: '14', strokeWidth: '4', color: color }),
            React.createElement(AnimatedSection, { cx: '16', cy: '16', fill: 'none', r: '14', strokeWidth: '4', color: color }))));
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map