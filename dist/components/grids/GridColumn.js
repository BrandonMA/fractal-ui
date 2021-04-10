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
import styled from 'styled-components';
import { Layer } from '../containers/Layer';
import { extractGridItemProps } from './types';
var StyledGrid = styled(Layer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex-direction: column;\n    ", ";\n"], ["\n    flex-direction: column;\n    ", ";\n"])), extractGridItemProps);
export function GridColumn(props) {
    return React.createElement(StyledGrid, __assign({}, props));
}
var templateObject_1;
//# sourceMappingURL=GridColumn.js.map