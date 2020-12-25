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
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { getFullScreenStyle } from '../util/getFullScreenStyle';
import { usePresentationType } from '../../Navigation/hooks/usePresentationType';
var Container = styled(Animated.View)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n"], ["\n    ", ";\n"])), getFullScreenStyle);
export function FullScreen(props) {
    var presentationType = usePresentationType();
    return React.createElement(Container, __assign({}, props, { presentationType: presentationType }));
}
var templateObject_1;
//# sourceMappingURL=FullScreen.js.map