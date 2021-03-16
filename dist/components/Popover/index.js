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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layer } from '../containers';
import { styleVariants } from './styleVariants';
var PopoverWrapper = styled(Layer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    display: inline-block;\n"], ["\n    position: relative;\n    display: inline-block;\n"])));
var styles = {
    width: '100%',
    zIndex: 2000
};
export function Popover(props) {
    var active = props.active, popoverChildren = props.popoverChildren, popoverContainerProps = props.popoverContainerProps, others = __rest(props, ["active", "popoverChildren", "popoverContainerProps"]);
    var mainViewLayout = { x: 0, y: 0, height: 0, width: 0 };
    var _a = useState('initial'), layerVariant = _a[0], setLayerVariant = _a[1];
    useEffect(function () {
        if (active) {
            setLayerVariant('visible');
        }
        else {
            setLayerVariant('initial');
        }
    }, [active]);
    return (React.createElement(PopoverWrapper, null,
        React.createElement(Layer, __assign({}, others)),
        React.createElement(Layer, __assign({ initial: 'initial', animate: layerVariant, variants: styleVariants, position: 'absolute', style: styles }, popoverContainerProps), popoverChildren(mainViewLayout))));
}
var templateObject_1;
//# sourceMappingURL=index.js.map