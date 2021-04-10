var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks';
var SliderInput = styled(motion.input)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    -webkit-appearance: none;\n    width: 100%;\n    height: 4px;\n    background-color: ", ";\n    outline: none;\n    :hover {\n        opacity: 1;\n    }\n    ::-webkit-slider-thumb {\n        appearance: none;\n        width: 20px;\n        height: 20px;\n        border-radius: 10px;\n        background: ", ";\n        cursor: pointer;\n        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);\n    }\n"], ["\n    -webkit-appearance: none;\n    width: 100%;\n    height: 4px;\n    background-color: ", ";\n    outline: none;\n    :hover {\n        opacity: 1;\n    }\n    ::-webkit-slider-thumb {\n        appearance: none;\n        width: 20px;\n        height: 20px;\n        border-radius: 10px;\n        background: ", ";\n        cursor: pointer;\n        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);\n    }\n"])), function (props) { return props.backgroundColor; }, function (props) { return props.thumbColor; });
export function Slider(_a) {
    var minimumValue = _a.minimumValue, maximumValue = _a.maximumValue, onValueChange = _a.onValueChange, onSlidingComplete = _a.onSlidingComplete, onSlidingStart = _a.onSlidingStart, step = _a.step, value = _a.value;
    var colors = useTheme().colors;
    var handleOnChange = function (e) {
        if (onValueChange)
            onValueChange(e.target.value);
    };
    var handleTouchEndCapture = function (e) {
        if (onSlidingComplete)
            onSlidingComplete(e.target.value);
    };
    var handleTouchStartCapture = function (e) {
        if (onSlidingStart)
            onSlidingStart(e.target.value);
    };
    return (React.createElement(SliderInput, { value: value, type: 'range', defaultValue: 0, step: step, min: minimumValue, max: maximumValue, backgroundColor: colors.placeholder, thumbColor: colors.mainInteractiveColor, onChange: handleOnChange, onTouchEndCapture: handleTouchEndCapture, onTouchStart: handleTouchStartCapture }));
}
var templateObject_1;
//# sourceMappingURL=index.js.map