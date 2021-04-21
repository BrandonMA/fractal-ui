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
import { useTheme } from '../../core/context/hooks/useTheme';
import { Dimensions } from 'react-native';
function BottomCellDesktop(props) {
    var _a = useTheme(), borderRadius = _a.borderRadius, colors = _a.colors;
    var window = Dimensions.get('window');
    return (React.createElement(Box, __assign({ pointerEvents: 'auto', overflow: 'hidden', borderRadius: borderRadius.m, width: 500, minHeight: 300, maxHeight: '50%', initial: { translateY: window.height }, animate: { translateY: 0 }, exit: { translateY: window.height }, backgroundColor: colors.background }, props)));
}
function BottomCellPhone(props) {
    var _a = useTheme(), borderRadius = _a.borderRadius, spacings = _a.spacings, colors = _a.colors;
    var window = Dimensions.get('window');
    return (React.createElement(Box, __assign({ pointerEvents: 'auto', overflow: 'hidden', borderRadius: borderRadius.m, alignSelf: 'stretch', minHeight: 300, maxHeight: '50%', margin: spacings.m, initial: { translateY: window.height }, animate: { translateY: 0 }, exit: { translateY: window.height }, backgroundColor: colors.background }, props)));
}
export function BottomCellModal(_a) {
    var visible = _a.visible, onDismiss = _a.onDismiss, others = __rest(_a, ["visible", "onDismiss"]);
    var widthSize = useWidthSizeGroup()[0];
    var Wrapper = getValueForLargeSize(widthSize, BottomCellDesktop, BottomCellPhone);
    return (React.createElement(DimmedModal, { visible: visible, onDismiss: onDismiss, pointerEvents: 'box-none', height: '100%', width: '100%', justifyContent: 'flex-end', alignItems: 'center' },
        React.createElement(Wrapper, __assign({}, others))));
}
//# sourceMappingURL=BottomCellModal.js.map