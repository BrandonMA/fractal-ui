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
import { Animated, Dimensions } from 'react-native';
import { useSpringAnimation, useTimingAnimation } from '../../animationHooks';
import { BaseBox } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';
import { useHideCallback } from './hooks/useHideCallback';
import { hideAnimationTiming } from './util/hideAnimationTiming';
export function TopSlideAnimation(_a) {
    var onHide = _a.onHide, style = _a.style, others = __rest(_a, ["onHide", "style"]);
    var _b = useContext(AnimatedPresenceContext), visible = _b[0], setIsSafeToRemove = _b[1];
    var handleHide = useHideCallback(setIsSafeToRemove, hideAnimationTiming, onHide);
    var screenHeight = Dimensions.get('window').height;
    var offsetY = useRef(new Animated.Value(-screenHeight)).current;
    var showAnimation = useSpringAnimation(offsetY, 0);
    var hideAnimation = useTimingAnimation(offsetY, -screenHeight, hideAnimationTiming, handleHide);
    var animatedStyle = useMemo(function () {
        return [
            style,
            {
                transform: [
                    {
                        translateY: offsetY
                    }
                ]
            }
        ];
    }, [offsetY, style]);
    useAnimationLifecycle(visible, showAnimation, hideAnimation);
    return React.createElement(BaseBox, __assign({}, others, { style: animatedStyle }));
}
//# sourceMappingURL=TopSlideAnimation.js.map