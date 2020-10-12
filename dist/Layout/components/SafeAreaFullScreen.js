var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components/native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';
import { applyFullscreenInsets } from '../util/applyFullscreenInsets';
import { FullScreen } from './FullScreen';
var Container = styled(FullScreen)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n"], ["\n    ", ";\n"])), applyFullscreenInsets);
export function SafeAreaFullScreen(props) {
    var totalInsets = useNavigationInsets().totalInsets;
    return <Container {...props} insets={totalInsets}/>;
}
var templateObject_1;
//# sourceMappingURL=SafeAreaFullScreen.js.map