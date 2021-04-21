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
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractWebProps } from '../../../sharedProps/WebProps';
var StyledLayer = styled(motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), extractBackgroundProps, extractDimensionProps, extractDisplayProps, extractBorderProps, extractShadowProps, extractWebProps);
var transition = { type: 'spring' };
export var Layer = forwardRef(function (props, ref) {
    return React.createElement(StyledLayer, __assign({ ref: ref, transition: transition }, props));
});
var templateObject_1;
//# sourceMappingURL=index.js.map