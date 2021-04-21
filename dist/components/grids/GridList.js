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
import { Layer } from '../containers/Layer';
import { getGridListAccessibilityProps } from './accessibility/getGridListAccessibilityProps';
export var GridList = forwardRef(function List(props, ref) {
    var numColumns = props.numColumns, renderItem = props.renderItem, data = props.data;
    var renderWrapper = function (item, index) {
        return (React.createElement(Layer, { key: "" + index, width: 100 / numColumns + "%" }, renderItem(item, index)));
    };
    return (React.createElement(Layer, __assign({ ref: ref, flexWrap: 'wrap', flexDirection: 'row' }, props, getGridListAccessibilityProps()), data.map(renderWrapper)));
});
//# sourceMappingURL=GridList.js.map