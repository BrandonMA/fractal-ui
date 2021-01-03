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
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { BasePressable } from '../baseComponents/BasePressable';
import { useShowAnimation } from '../../animationHooks/useShowAnimation';
import { Animated } from 'react-native';
import { useHideAnimation } from '../../animationHooks/useHideAnimation';
var Entypo = Animated.createAnimatedComponent(BaseEntypo);
export function ColorToggle(props) {
    var onActiveChange = props.onActiveChange, backgroundColor = props.backgroundColor, active = props.active, others = __rest(props, ["onActiveChange", "backgroundColor", "active"]);
    var _a = useState(false), internalActive = _a[0], setActive = _a[1];
    var animatedValue = useRef(new Animated.Value(active || internalActive ? 1 : 0)).current;
    var showAnimation = useShowAnimation(animatedValue);
    var hideAnimation = useHideAnimation(animatedValue);
    var iconStyle = useMemo(function () {
        return { opacity: animatedValue, transform: [{ scale: animatedValue }] };
    }, [animatedValue]);
    var handleControlledActiveToggle = useCallback(function () {
        if (onActiveChange) {
            onActiveChange(!active, backgroundColor);
        }
    }, [onActiveChange, active, backgroundColor]);
    var handleUncontrolledActiveToggle = useCallback(function () {
        setActive(function (currentValue) {
            if (onActiveChange != null) {
                onActiveChange(!currentValue, backgroundColor);
            }
            return !currentValue;
        });
    }, [setActive, onActiveChange, backgroundColor]);
    var handlePress = useCallback(function () {
        if (active != null) {
            handleControlledActiveToggle();
        }
        else {
            handleUncontrolledActiveToggle();
        }
    }, [active, handleUncontrolledActiveToggle, handleControlledActiveToggle]);
    useEffect(function () {
        if (internalActive || active) {
            showAnimation();
        }
        else {
            hideAnimation();
        }
    }, [internalActive, showAnimation, hideAnimation, active]);
    return (React.createElement(BasePressable, __assign({ onPress: handlePress, width: 40, height: 40, borderRadius: 'xl', justifyContent: 'center', alignItems: 'center', style: { backgroundColor: backgroundColor } }, others),
        React.createElement(Entypo, { selectable: false, name: 'check', size: 24, color: 'white', style: iconStyle })));
}
//# sourceMappingURL=ColorToggle.js.map