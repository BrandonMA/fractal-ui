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
import React, { useCallback, useState } from 'react';
import { HorizontalView } from '../containers';
import { ColorToggle } from './ColorToggle';
export function ColorPicker(props) {
    var colors = props.colors, onColorChange = props.onColorChange, others = __rest(props, ["colors", "onColorChange"]);
    var _a = useState(colors[0]), activeColor = _a[0], setActiveColor = _a[1];
    var handleColorChange = useCallback(function (active, color) {
        if (active) {
            setActiveColor(color);
            onColorChange(color);
        }
    }, [onColorChange]);
    return (React.createElement(HorizontalView, __assign({ justifyContent: 'space-around', flexWrap: 'wrap' }, others), colors.map(function (color) { return (React.createElement(ColorToggle, { backgroundColor: color, key: color, onActiveChange: handleColorChange, active: activeColor === color, margin: 'xs' })); })));
}
//# sourceMappingURL=ColorPicker.js.map