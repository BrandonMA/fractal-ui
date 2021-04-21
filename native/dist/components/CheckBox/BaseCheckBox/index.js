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
import { motion } from 'framer-motion';
import { useTheme } from '../../../core/context/hooks/useTheme';
import { Layer } from '../../containers';
import { Text } from '../../text';
import { Check } from '../Check';
import { getCheckBoxAccessibilityProps } from '../accessibility/getCheckBoxAccessibilityProps';
var Wrapper = styled(motion.label)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    cursor: pointer;\n    display: inline-flex;\n    -webkit-box-align: center;\n    align-items: center;\n    vertical-align: top;\n    position: relative;\n"], ["\n    cursor: pointer;\n    display: inline-flex;\n    -webkit-box-align: center;\n    align-items: center;\n    vertical-align: top;\n    position: relative;\n"])));
var CheckBoxInput = styled(motion.input)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    border: 0;\n    clip: rect(0px, 0px, 0px, 0px);\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    padding: 0;\n    overflow: hidden;\n    white-space: nowrap;\n    position: absolute;\n"], ["\n    border: 0;\n    clip: rect(0px, 0px, 0px, 0px);\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    padding: 0;\n    overflow: hidden;\n    white-space: nowrap;\n    position: absolute;\n"])));
var StyledLayer = styled(Layer)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    box-sizing: border-box;\n"], ["\n    box-sizing: border-box;\n"])));
export function BaseCheckBox(_a) {
    var value = _a.value, onValueChange = _a.onValueChange, label = _a.label;
    var _b = useTheme(), colors = _b.colors, spacings = _b.spacings, sizes = _b.sizes, borderRadius = _b.borderRadius;
    var handleValueChange = function () {
        onValueChange(!value);
    };
    return (React.createElement(Wrapper, null,
        React.createElement(CheckBoxInput, __assign({ type: 'checkbox', checked: value, onChange: handleValueChange }, getCheckBoxAccessibilityProps(value))),
        React.createElement(StyledLayer, { width: sizes.checkBoxSize, height: sizes.checkBoxSize, borderWidth: 2, borderRadius: borderRadius.xs, borderColor: value ? colors.mainInteractiveColor : colors.placeholder, borderStyle: 'solid', overflow: 'hidden' },
            React.createElement(Check, { value: value })),
        label && (React.createElement(Text, { marginLeft: spacings.xs, variant: 'normal' }, label))));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map