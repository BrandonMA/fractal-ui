var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components/native';
import { Layer } from '../../containers/Layer';
var StyledRadio = styled(Layer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 16px;\n    height: 16px;\n    border-radius: 8px;\n"], ["\n    width: 16px;\n    height: 16px;\n    border-radius: 8px;\n"])));
export function Radio(_a) {
    var active = _a.active, activeColor = _a.activeColor, inactiveColor = _a.inactiveColor;
    return React.createElement(StyledRadio, { borderWidth: active ? 6 : 2, borderColor: active ? activeColor : inactiveColor });
}
var templateObject_1;
//# sourceMappingURL=index.native.js.map