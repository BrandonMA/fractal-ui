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
import { useTheme } from '../../hooks/useTheme';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { ColorToggle } from './ColorToggle';
export function ColorPicker(_a) {
    var colors = _a.colors, onColorChange = _a.onColorChange, others = __rest(_a, ["colors", "onColorChange"]);
    var _b = useState(colors[0]), activeColor = _b[0], setActiveColor = _b[1];
    var spacings = useTheme().spacings;
    var handleColorChange = useCallback(function (active, color) {
        if (active) {
            setActiveColor(color);
            onColorChange(color);
        }
    }, [onColorChange]);
    var renderItem = function (color) { return (React.createElement(ColorToggle, { backgroundColor: color, key: color, onActiveChange: handleColorChange, active: activeColor === color, margin: spacings.xs })); };
    return (React.createElement(HorizontalLayer, __assign({ justifyContent: 'space-around', flexWrap: 'wrap' }, others), colors.map(renderItem)));
}
//# sourceMappingURL=ColorPicker.js.map