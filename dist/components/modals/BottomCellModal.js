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
import React, { memo, useEffect, useMemo, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { BaseTouchableOpacity } from '../baseComponents';
import { Cell, PaddedContainer } from '../containers';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';
import { useSpringAnimation } from '../../animationHooks/useSpringAnimation';
import { DimmedModal } from './DimmedModal';
var Entypo = memo(BaseEntypo);
export function BottomCellModal(props) {
    var children = props.children, onDismiss = props.onDismiss, visible = props.visible, others = __rest(props, ["children", "onDismiss", "visible"]);
    var theme = useTheme();
    var screenHeight = Dimensions.get('screen').height;
    var yOffset = useRef(new Animated.Value(screenHeight)).current;
    var showAnimation = useSpringAnimation(yOffset, 0, 10, 4);
    var style = useMemo(function () {
        return { transform: [{ translateY: yOffset }] };
    }, [yOffset]);
    useEffect(function () {
        if (visible) {
            showAnimation();
        }
    }, [showAnimation, visible]);
    return (React.createElement(DimmedModal, __assign({ onDismiss: onDismiss, visible: visible }, others, { justifyContent: 'flex-end' }),
        React.createElement(PaddedContainer, { style: style, width: '100%', alignItems: 'center' },
            React.createElement(Cell, { maxWidth: 540, width: '100%' },
                React.createElement(BaseTouchableOpacity, { justifyContent: 'center', alignItems: 'center', backgroundColor: 'background', alignSelf: 'flex-end', width: 32, height: 32, borderRadius: 'l', onPress: onDismiss },
                    React.createElement(Entypo, { name: 'cross', size: 21, color: theme.colors.placeholderColor })),
                children))));
}
//# sourceMappingURL=BottomCellModal.js.map