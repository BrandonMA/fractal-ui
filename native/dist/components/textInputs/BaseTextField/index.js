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
import React, { useCallback, forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractTextProps } from '../../../sharedProps/TextProps';
import { extractWebProps } from '../../../sharedProps/WebProps';
import { extractPlaceholder } from '../../../sharedProps/PlaceholderProps';
import { getTextFieldAccessibilityProps } from '../accessibility/getTextInputccessibilityProps';
var StyledTextInput = styled(motion.input)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    outline: none;\n    border-width: 0px;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    outline: none;\n    border-width: 0px;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), extractPlaceholder, extractBackgroundProps, extractDimensionProps, extractDisplayProps, extractBorderProps, extractTextProps, extractWebProps);
export var BaseTextField = forwardRef(function (props, ref) {
    var onChangeText = props.onChangeText, placeholder = props.placeholder, others = __rest(props, ["onChangeText", "placeholder"]);
    var handleChange = useCallback(function (event) {
        onChangeText && onChangeText(event.target.value);
    }, [onChangeText]);
    return (React.createElement(StyledTextInput, __assign({ ref: ref, placeholder: placeholder, selectable: true, onChange: handleChange }, others, getTextFieldAccessibilityProps(placeholder))));
});
var templateObject_1;
//# sourceMappingURL=index.js.map