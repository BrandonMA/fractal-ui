var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extractTextProps } from '../../../../sharedProps/TextProps';
var StyledOption = styled(motion.option)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n"], ["\n    ", ";\n"])), extractTextProps);
export function PickerItem(_a) {
    var color = _a.color, label = _a.label, value = _a.value;
    return (React.createElement(StyledOption, { color: color, value: value, label: label }, label));
}
var templateObject_1;
//# sourceMappingURL=index.js.map