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
import React from 'react';
import { Box } from '../containers';
import { getValueForLargeSize, useWidthSizeGroup } from '@bma98/size-class';
import { DimmedModal } from './DimmedModal';
import { useTheme } from '../../hooks/useTheme';
function MiddleCellDesktop(props) {
    var _a = useTheme(), borderRadius = _a.borderRadius, colors = _a.colors;
    return (React.createElement(Box, __assign({ pointerEvents: 'auto', overflow: 'hidden', borderRadius: borderRadius.m, maxWidth: 550, maxHeight: 550, width: '60%', height: '60%', initial: { scale: 0 }, animate: { scale: 1 }, exit: { scale: 0 }, backgroundColor: colors.background }, props)));
}
function MiddleCellPhone(props) {
    var _a = useTheme(), borderRadius = _a.borderRadius, spacings = _a.spacings, colors = _a.colors;
    return (React.createElement(Box, __assign({ pointerEvents: 'auto', overflow: 'hidden', borderRadius: borderRadius.m, alignSelf: 'stretch', flex: 1, margin: spacings.m, initial: { scale: 0 }, animate: { scale: 1 }, exit: { scale: 0 }, backgroundColor: colors.background }, props)));
}
export function MiddleCellModal(_a) {
    var visible = _a.visible, onDismiss = _a.onDismiss, others = __rest(_a, ["visible", "onDismiss"]);
    var widthSize = useWidthSizeGroup()[0];
    var Wrapper = getValueForLargeSize(widthSize, MiddleCellDesktop, MiddleCellPhone);
    return (React.createElement(DimmedModal, { pointerEvents: 'box-none', visible: visible, onDismiss: onDismiss, height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' },
        React.createElement(Wrapper, __assign({}, others))));
}
//# sourceMappingURL=MiddleCellModal.js.map