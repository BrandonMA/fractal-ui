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
import React, { forwardRef } from 'react';
import { getImageAccessibilityProps } from './accessibility/getImageAccessibilityProps';
import { ResizableImage } from './ResizableImage';
import { Layer } from '../containers/Layer';
export var Image = forwardRef(function (_a, ref) {
    var label = _a.label, source = _a.source, resizeMode = _a.resizeMode, width = _a.width, height = _a.height, others = __rest(_a, ["label", "source", "resizeMode", "width", "height"]);
    var getBackgroundSize = function () {
        if ((resizeMode == 'center' || resizeMode == 'repeat') && width != null && height != null) {
            if (typeof width == 'string') {
                return width + " " + height;
            }
            return width < height ? width + "px" : height + "px";
        }
        return undefined;
    };
    return (React.createElement(Layer, __assign({ ref: ref, flexBasis: 'auto', overflow: 'hidden', zIndex: 0, display: 'flex', width: width, height: height }, others, getImageAccessibilityProps(label)),
        React.createElement(ResizableImage, { source: source, resizeMode: resizeMode, backgroundSize: getBackgroundSize() })));
});
//# sourceMappingURL=index.js.map