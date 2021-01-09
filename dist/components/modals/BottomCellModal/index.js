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
import React, { memo, useEffect } from 'react';
import { BaseTouchableOpacity } from '../../baseComponents';
import { Cell, PaddedContainer } from '../../containers';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';
import { DimmedModal } from '../DimmedModal';
import { useBottomCellModalAnimation } from './hooks/useBottomCellModalAnimation';
var Entypo = memo(BaseEntypo);
export function Index(_a) {
    var children = _a.children, onDismiss = _a.onDismiss, visible = _a.visible, others = __rest(_a, ["children", "onDismiss", "visible"]);
    var colors = useTheme().colors;
    var _b = useBottomCellModalAnimation(), animatedStyle = _b[0], showAnimation = _b[1];
    useEffect(function () {
        if (visible) {
            showAnimation();
        }
    }, [showAnimation, visible]);
    return (React.createElement(DimmedModal, __assign({ onDismiss: onDismiss, visible: visible }, others, { justifyContent: 'flex-end' }),
        React.createElement(PaddedContainer, { style: animatedStyle, width: '100%', alignItems: 'center' },
            React.createElement(Cell, { maxWidth: 540, width: '100%' },
                React.createElement(BaseTouchableOpacity, { justifyContent: 'center', alignItems: 'center', backgroundColor: 'background', alignSelf: 'flex-end', width: 32, height: 32, borderRadius: 'l', onPress: onDismiss },
                    React.createElement(Entypo, { name: 'cross', size: 21, color: colors.placeholderColor })),
                children))));
}
//# sourceMappingURL=index.js.map