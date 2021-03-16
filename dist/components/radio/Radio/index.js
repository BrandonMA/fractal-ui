var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { Layer } from '../../containers';
var StyledRadio = styled(Layer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-style: solid;\n"], ["\n    border-style: solid;\n"])));
export function Radio(_a) {
    var active = _a.active, activeColor = _a.activeColor, inactiveColor = _a.inactiveColor;
    return (React.createElement(StyledRadio, { width: active ? 6 : 14, height: active ? 6 : 14, borderRadius: active ? 12 : 8, borderWidth: active ? 6 : 2, borderColor: active ? activeColor : inactiveColor }));
}
var templateObject_1;
//# sourceMappingURL=index.js.map