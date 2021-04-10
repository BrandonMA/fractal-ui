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
var StyledGrid = styled(Layer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    flex-wrap: wrap;\n    flex-direction: row;\n"], ["\n    flex-wrap: wrap;\n    flex-direction: row;\n"])));
export function GridList(props) {
    var numColumns = props.numColumns, renderItem = props.renderItem, data = props.data;
    var renderWrapper = function (item, index) {
        return (React.createElement(Layer, { key: "" + index, width: 100 / numColumns + "%" }, renderItem(item, index)));
    };
    return React.createElement(StyledGrid, __assign({}, props), data.map(renderWrapper));
}
var templateObject_1;
//# sourceMappingURL=GridList.js.map