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
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractTextProps } from '../../../../sharedProps/TextProps';
import { extractBackgroundProps } from '../../../../sharedProps/BackgroundProps';
import { extractDimensionProps } from '../../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../../sharedProps/DisplayProps';
import { extractBorderProps } from '../../../../sharedProps/BorderProps';
import { extractWebProps } from '../../../../sharedProps/WebProps';
var StyledSelect = styled(motion.select)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    appearance: none;\n    cursor: pointer;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    appearance: none;\n    cursor: pointer;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), extractBackgroundProps, extractDimensionProps, extractDisplayProps, extractBorderProps, extractTextProps, extractWebProps);
export function BasePicker(_a) {
    var onValueChange = _a.onValueChange, enabled = _a.enabled, selectedValue = _a.selectedValue, others = __rest(_a, ["onValueChange", "enabled", "selectedValue"]);
    var handleChange = useCallback(function (e) {
        var _a = e.target, selectedIndex = _a.selectedIndex, value = _a.value;
        if (onValueChange) {
            onValueChange(value, selectedIndex);
        }
    }, [onValueChange]);
    return React.createElement(StyledSelect, __assign({ disabled: enabled === false ? true : undefined, onChange: handleChange, value: selectedValue }, others));
}
var templateObject_1;
//# sourceMappingURL=index.js.map