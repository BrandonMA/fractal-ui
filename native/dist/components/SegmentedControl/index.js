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
import { motion, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';
import { extractBackgroundProps, extractBorderProps, extractDimensionProps, extractDisplayProps, extractShadowProps, extractWebProps } from '../../sharedProps';
import { useTheme } from '../../core/context/hooks/useTheme';
import { SegmentedControlTab } from './SegmentControlTap';
import { getSegmentedControlAccessibilityProps } from './accessibility/getSegmentedControlAccessibilityProps';
var Container = styled(motion.ol)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    list-style: none;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    list-style: none;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), extractBackgroundProps, extractDimensionProps, extractDisplayProps, extractBorderProps, extractShadowProps, extractWebProps);
export var SegmentedControl = forwardRef(function (_a, ref) {
    var onChange = _a.onChange, onValueChange = _a.onValueChange, _b = _a.selectedIndex, selectedIndex = _b === void 0 ? 0 : _b, values = _a.values, tintColor = _a.tintColor, backgroundColor = _a.backgroundColor, textStyle = _a.textStyle, activeTextStyle = _a.activeTextStyle, layerProps = __rest(_a, ["onChange", "onValueChange", "selectedIndex", "values", "tintColor", "backgroundColor", "textStyle", "activeTextStyle"]);
    var _c = useTheme(), colors = _c.colors, borderRadius = _c.borderRadius, sizes = _c.sizes;
    return (React.createElement(AnimateSharedLayout, null,
        React.createElement(Container, __assign({ ref: ref, backgroundColor: backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : colors.background, margin: 0, padding: 2, width: '100%', height: sizes.segmentedControlSize, borderRadius: borderRadius.s, display: 'inline-flex', flexDirection: 'row' }, layerProps, getSegmentedControlAccessibilityProps()), values.map(function (item, index) {
            return (React.createElement(SegmentedControlTab, { selected: selectedIndex === index, hideDivider: backgroundColor != undefined ||
                    tintColor != undefined ||
                    selectedIndex === index ||
                    index === selectedIndex - 1, key: index, value: item, tintColor: tintColor, textStyle: textStyle, activeTextStyle: activeTextStyle, onSelect: function () {
                    onChange === null || onChange === void 0 ? void 0 : onChange(item, index);
                    onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(item);
                } }));
        }))));
});
var templateObject_1;
//# sourceMappingURL=index.js.map