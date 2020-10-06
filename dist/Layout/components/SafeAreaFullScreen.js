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
import styled from 'styled-components/native';
import { useNavigationInsets } from '../../Navigation/hooks/useNavigationInsets';
import { applyFullscreenInsets } from '../util/applyFullscreenInsets';
import { Fullscreen } from './Fullscreen';
var Container = styled(Fullscreen)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n"], ["\n    ", "\n"])), applyFullscreenInsets);
export function SafeAreaFullScreen(props) {
    var totalInsets = useNavigationInsets().totalInsets;
    return React.createElement(Container, __assign({}, props, totalInsets));
}
var templateObject_1;
//# sourceMappingURL=SafeAreaFullScreen.js.map