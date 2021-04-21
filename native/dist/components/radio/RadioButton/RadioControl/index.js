var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../../core/context/hooks/useTheme';
import { Layer } from '../../../containers/Layer';
var StyledLayer = styled(Layer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;\n"], ["\n    box-sizing: border-box;\n"])));
export function RadioControl(_a) {
    var active = _a.active, children = _a.children;
    var _b = useTheme(), colors = _b.colors, sizes = _b.sizes;
    return (React.createElement(StyledLayer, { width: sizes.radioButtonSize, height: sizes.radioButtonSize, display: 'flex', flexShrink: 0, borderRadius: sizes.radioButtonSize / 2, borderWidth: 2, overflow: 'hidden', borderStyle: 'solid', alignItems: 'center', justifyContent: 'center', borderColor: active ? colors.mainInteractiveColor : colors.placeholder }, children));
}
var templateObject_1;
//# sourceMappingURL=index.js.map