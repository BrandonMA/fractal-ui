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
import { Layer } from '../containers/Layer';
import { extractGridItemProps } from './types';
import { getGridRowAccessibilityProps } from './accessibility/getGridRowAccessibilityProps';
var StyledGrid = styled(Layer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n"], ["\n    ", ";\n"])), extractGridItemProps);
export var GridRow = forwardRef(function (props, ref) {
    return React.createElement(StyledGrid, __assign({ ref: ref, flexDirection: 'row' }, props, getGridRowAccessibilityProps()));
});
var templateObject_1;
//# sourceMappingURL=GridRow.js.map