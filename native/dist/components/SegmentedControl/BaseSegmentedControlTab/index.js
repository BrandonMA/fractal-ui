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
import { Text } from '../../text';
import { useTheme } from '../../../core/context/hooks/useTheme';
import styled from 'styled-components';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { getSegmentedControlButtonAccessibilityProps } from '../accessibility/getSegmentedControlButtonAccessibilityProps';
var Button = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    ", ";\n    line-height: 1;\n    background: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n        cursor: pointer;\n    }\n"], ["\n    position: relative;\n    ", ";\n    line-height: 1;\n    background: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n\n    &:hover,\n    &:focus {\n        cursor: pointer;\n    }\n"])), extractDimensionProps);
var Tap = styled(motion.li)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: relative;\n    margin-bottom: 0;\n    line-height: 1;\n    width: 100%;\n    ", "\n    &:last-of-type:after {\n        display: none;\n    }\n"], ["\n    position: relative;\n    margin-bottom: 0;\n    line-height: 1;\n    width: 100%;\n    ",
    "\n    &:last-of-type:after {\n        display: none;\n    }\n"])), function (props) {
    return props.noDivider
        ? "&:after {\n        opacity: 0;\n    }"
        : "&:after {\n        position: absolute;\n        top: 25%;\n        right: -0.5px;\n        display: block;\n        width: 1px;\n        height: 50%;\n        background-color: gray;\n        transition: opacity 200ms ease-out;\n        content: '';\n    }";
});
var Slider = styled(motion.div)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    content: '';\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    ", "\n    ", "\n    ", "\n"], ["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    content: '';\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    ", "\n    ", "\n    ", "\n"])), extractBackgroundProps, extractShadowProps, extractBorderProps);
export function BaseSegmentedControlTab(_a) {
    var onSelect = _a.onSelect, selected = _a.selected, value = _a.value, hideDivider = _a.hideDivider, fontFamily = _a.fontFamily, fontSize = _a.fontSize, color = _a.color, fontWeight = _a.fontWeight, fontStyle = _a.fontStyle, tintColor = _a.tintColor;
    var _b = useTheme(), borderRadius = _b.borderRadius, colors = _b.colors, shadows = _b.shadows;
    return (React.createElement(Tap, { noDivider: hideDivider !== null && hideDivider !== void 0 ? hideDivider : selected, whileTap: selected ? { scale: 0.95 } : { opacity: 0.6 } },
        React.createElement(Button, __assign({ margin: 0, width: '100%', height: '100%', onClick: onSelect, type: 'button' }, getSegmentedControlButtonAccessibilityProps(selected)),
            selected && (React.createElement(Slider, { layoutId: 'SegmentedControlActive', backgroundColor: tintColor !== null && tintColor !== void 0 ? tintColor : colors.foreground, boxShadow: shadows.mainShadow, borderRadius: borderRadius.s })),
            React.createElement(Text, { variant: 'normal', position: 'relative', zIndex: 2, fontFamily: fontFamily, fontSize: fontSize, color: color, fontWeight: fontWeight, fontStyle: fontStyle }, value))));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map