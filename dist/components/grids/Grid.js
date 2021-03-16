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
import React, { Children } from 'react';
import { Layer } from '../containers/Layer';
import { GridRow } from './GridRow';
export function Grid(_a) {
    var children = _a.children, others = __rest(_a, ["children"]);
    var isRow = function () {
        var row = false;
        Children.forEach(children, function (child) {
            if (child && child.type == GridRow)
                row = true;
        });
        return row;
    };
    return (React.createElement(Layer, __assign({ flex: 1, flexDirection: isRow() ? 'column' : 'row' }, others), children));
}
//# sourceMappingURL=Grid.js.map