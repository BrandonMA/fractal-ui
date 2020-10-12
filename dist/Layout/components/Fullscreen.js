var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { applyFullScreenStyles } from '../util/applyFullScreenStyles';
var Container = styled(View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n"], ["\n    ", ";\n"])), applyFullScreenStyles);
export function FullScreen(props) {
    return <Container {...props}/>;
}
var templateObject_1;
//# sourceMappingURL=FullScreen.js.map