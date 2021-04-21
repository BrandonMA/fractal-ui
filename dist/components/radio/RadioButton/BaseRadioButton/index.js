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
import { motion } from 'framer-motion';
import { Text } from '../../../text';
import { useTheme } from '../../../../core/context/hooks/useTheme';
import styled from 'styled-components';
import { Radio } from '../Radio';
import { getRadioButtonAccessibilityProps } from '../../accessibility/getRadioButtonAccessibilityProps';
var Wrapper = styled(motion.label)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: inline-flex;\n    -webkit-box-align: center;\n    align-items: center;\n    vertical-align: top;\n    cursor: pointer;\n"], ["\n    display: inline-flex;\n    -webkit-box-align: center;\n    align-items: center;\n    vertical-align: top;\n    cursor: pointer;\n"])));
var RadioInput = styled(motion.input)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border: 0px;\n    clip: rect(0px, 0px, 0px, 0px);\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    padding: 0px;\n    overflow: hidden;\n    white-space: nowrap;\n    position: absolute;\n"], ["\n    border: 0px;\n    clip: rect(0px, 0px, 0px, 0px);\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    padding: 0px;\n    overflow: hidden;\n    white-space: nowrap;\n    position: absolute;\n"])));
export function BaseRadioButton(_a) {
    var label = _a.label, onPress = _a.onPress, active = _a.active, value = _a.value;
    var spacings = useTheme().spacings;
    return (React.createElement(Wrapper, null,
        React.createElement(RadioInput, __assign({ value: value, type: 'radio', checked: active, onChange: function () { return onPress(); } }, getRadioButtonAccessibilityProps(active))),
        React.createElement(Radio, { active: active }),
        label && (React.createElement(Text, { marginLeft: spacings.xs, variant: 'normal' }, label))));
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map