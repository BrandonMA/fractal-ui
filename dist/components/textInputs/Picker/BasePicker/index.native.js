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
import { Picker } from '@react-native-picker/picker';
import { extractTextProps } from '../../../../sharedProps/TextProps';
import styled from 'styled-components/native';
import { extractBackgroundProps } from '../../../../sharedProps/BackgroundProps';
import { extractDimensionProps } from '../../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../../sharedProps/DisplayProps';
import { extractBorderProps } from '../../../../sharedProps/BorderProps';
var StyledPicker = styled(Picker)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), extractBackgroundProps, extractDimensionProps, extractDisplayProps, extractBorderProps, extractTextProps);
export function BasePicker(props) {
    return React.createElement(StyledPicker, __assign({}, props));
}
var templateObject_1;
//# sourceMappingURL=index.native.js.map