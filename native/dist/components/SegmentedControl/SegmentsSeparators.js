var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import * as React from 'react';
import { useTheme } from '../../core';
import { Layer } from '../containers/Layer';
export var SegmentsSeparators = function (_a) {
    var values = _a.values, selectedIndex = _a.selectedIndex;
    var colors = useTheme().colors;
    var hide = function (val) {
        return selectedIndex === val || selectedIndex === val + 1;
    };
    return (React.createElement(Layer, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }, __spreadArrays(Array.from(new Array(values - 1).keys())).map(function (val) {
        return React.createElement(Layer, { key: val, width: 1, height: '50%', backgroundColor: hide(val) ? 'transparent' : colors.placeholder });
    })));
};
//# sourceMappingURL=SegmentsSeparators.js.map