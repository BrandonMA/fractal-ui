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
import { useTheme } from '../../core';
import { Box } from '../containers';
import React from 'react';
import { getValueForLargeSize, useWidthSizeGroup } from '@bma98/size-class';
function ModalCellDesktop(props) {
    var _a = useTheme(), borderRadius = _a.borderRadius, colors = _a.colors;
    return (React.createElement(Box, __assign({ pointerEvents: 'auto', overflow: 'hidden', borderRadius: borderRadius.m, maxWidth: 550, maxHeight: 550, width: '60%', height: '60%', initial: { scale: 0 }, animate: { scale: 1 }, exit: { scale: 0 }, backgroundColor: colors.background }, props)));
}
function ModalCellPhone(props) {
    var _a = useTheme(), borderRadius = _a.borderRadius, spacings = _a.spacings, colors = _a.colors;
    return (React.createElement(Box, __assign({ pointerEvents: 'auto', overflow: 'hidden', borderRadius: borderRadius.m, alignSelf: 'stretch', flex: 1, margin: spacings.m, initial: { scale: 0 }, animate: { scale: 1 }, exit: { scale: 0 }, backgroundColor: colors.background }, props)));
}
export function ModalMiddleCell(props) {
    var widthSize = useWidthSizeGroup()[0];
    var Wrapper = getValueForLargeSize(widthSize, ModalCellDesktop, ModalCellPhone);
    return React.createElement(Wrapper, __assign({}, props));
}
//# sourceMappingURL=ModalMiddleCell.js.map