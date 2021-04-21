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
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractBackgroundProps } from '../../../sharedProps/BackgroundProps';
import { extractBorderProps } from '../../../sharedProps/BorderProps';
import { extractDimensionProps } from '../../../sharedProps/DimensionProps';
import { extractDisplayProps } from '../../../sharedProps/DisplayProps';
import { extractShadowProps } from '../../../sharedProps/ShadowProps';
import { extractWebProps } from '../../../sharedProps/WebProps';
import { useLongPress } from '../useLongPress';
var StyledTouchableOpacity = styled(motion.button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"], ["\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n"])), extractBackgroundProps, extractDimensionProps, extractDisplayProps, extractBorderProps, extractShadowProps, extractWebProps);
var transition = { type: 'linear', duration: 0.2 };
var emptyFuntion = function () { return undefined; };
export var TouchableOpacity = forwardRef(function (_a, ref) {
    var onPress = _a.onPress, onLongPress = _a.onLongPress, whileTap = _a.whileTap, others = __rest(_a, ["onPress", "onLongPress", "whileTap"]);
    var tapStyles = __assign({ opacity: 0.4 }, whileTap);
    var longPressEvent = useLongPress(onLongPress !== null && onLongPress !== void 0 ? onLongPress : emptyFuntion, {
        isPreventDefault: true,
        delay: 300
    });
    return (React.createElement(StyledTouchableOpacity, __assign({ ref: ref, transition: transition, whileTap: tapStyles, onClick: onPress }, longPressEvent, others)));
});
var templateObject_1;
//# sourceMappingURL=index.js.map