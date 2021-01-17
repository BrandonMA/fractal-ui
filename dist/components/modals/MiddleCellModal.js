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
import React, { useEffect } from 'react';
import { Cell } from '../containers';
import { DimmedModal } from './DimmedModal';
import { useModalAnimation } from './hooks/useModalAnimation';
import { getValueForLargeSize, useWidthSizeGroup } from '@bma98/size-class';
function MiddleCellDesktop(_a) {
    var children = _a.children, style = _a.style;
    return (React.createElement(Cell, { overflow: 'hidden', borderRadius: 'm', maxWidth: 550, maxHeight: 550, width: '60%', height: '60%', style: style }, children));
}
function MiddleCellPhone(_a) {
    var children = _a.children, style = _a.style;
    return (React.createElement(Cell, { overflow: 'hidden', borderRadius: 'm', marginTop: 'm', width: '90%', height: '95%', style: style }, children));
}
export function MiddleCellModal(_a) {
    var children = _a.children, onDismiss = _a.onDismiss, visible = _a.visible, others = __rest(_a, ["children", "onDismiss", "visible"]);
    var _b = useModalAnimation(onDismiss), animatedStyle = _b[0], showAnimation = _b[1], hideAnimation = _b[2];
    var widthSize = useWidthSizeGroup()[0];
    var Wrapper = getValueForLargeSize(widthSize, MiddleCellDesktop, MiddleCellPhone);
    var justifyContent = getValueForLargeSize(widthSize, 'center', 'flex-start');
    useEffect(function () {
        if (visible) {
            showAnimation();
        }
    }, [showAnimation, visible]);
    return (React.createElement(DimmedModal, __assign({ onDismiss: hideAnimation, visible: visible }, others, { justifyContent: justifyContent, alignItems: 'center' }),
        React.createElement(Wrapper, { style: animatedStyle }, children)));
}
//# sourceMappingURL=MiddleCellModal.js.map