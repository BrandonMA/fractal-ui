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
import React, { useContext, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useTimingAnimation } from '../../animationHooks';
import { BaseBox } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';
import { useHideCallback } from './hooks/useHideCallback';
export function FadeAnimation(_a) {
    var _b = _a.activeOpacity, activeOpacity = _b === void 0 ? 1 : _b, onHide = _a.onHide, style = _a.style, others = __rest(_a, ["activeOpacity", "onHide", "style"]);
    var _c = useContext(AnimatedPresenceContext), visible = _c[0], setIsSafeToRemove = _c[1];
    var handleHide = useHideCallback(setIsSafeToRemove, onHide);
    var opacity = useRef(new Animated.Value(0)).current;
    var showAnimation = useTimingAnimation(opacity, activeOpacity, 600);
    var hideAnimation = useTimingAnimation(opacity, 0, 200, handleHide);
    var animatedStyle = useMemo(function () {
        return [
            style,
            {
                opacity: opacity
            }
        ];
    }, [opacity, style]);
    useAnimationLifecycle(visible, showAnimation, hideAnimation);
    return React.createElement(BaseBox, __assign({}, others, { style: animatedStyle }));
}
//# sourceMappingURL=FadeAnimation.js.map