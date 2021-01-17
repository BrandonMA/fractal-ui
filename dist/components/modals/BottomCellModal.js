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
import React, { memo } from 'react';
import { BaseTouchableOpacity } from '../baseComponents';
import { Cell } from '../containers';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';
import { DimmedModal } from './DimmedModal';
import { AnimatedPresence, BottomSlideAnimation } from '../animations';
import { useModalAnimation } from './hooks/useModalAnimation';
var Entypo = memo(BaseEntypo);
export function BottomCellModal(_a) {
    var children = _a.children, onDismiss = _a.onDismiss, visible = _a.visible, others = __rest(_a, ["children", "onDismiss", "visible"]);
    var colors = useTheme().colors;
    var _b = useModalAnimation(onDismiss, 300), cellIsVisible = _b[0], hideAnimated = _b[1];
    return (React.createElement(DimmedModal, __assign({ onDismiss: hideAnimated, visible: visible }, others, { justifyContent: 'flex-end' }),
        React.createElement(AnimatedPresence, null, cellIsVisible ? (React.createElement(BottomSlideAnimation, { padding: 'm', alignSelf: 'center', maxWidth: 540, width: '100%' },
            React.createElement(Cell, null,
                React.createElement(BaseTouchableOpacity, { justifyContent: 'center', alignItems: 'center', backgroundColor: 'background', alignSelf: 'flex-end', width: 32, height: 32, borderRadius: 'l', onPress: hideAnimated },
                    React.createElement(Entypo, { name: 'cross', size: 21, color: colors.placeholderColor })),
                children))) : null)));
}
//# sourceMappingURL=BottomCellModal.js.map