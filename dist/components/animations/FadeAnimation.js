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
import React, { useContext, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useTimingAnimation } from '../../animationHooks';
import { BaseBox } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';
export function FadeAnimation(props) {
    var _a = useContext(AnimatedPresenceContext), visible = _a[0], setIsSafeToRemove = _a[1];
    var opacity = useRef(new Animated.Value(0)).current;
    var showAnimation = useTimingAnimation(opacity, 1, 600);
    var hideAnimation = useTimingAnimation(opacity, 0, 200, setIsSafeToRemove);
    var animatedStyle = useMemo(function () {
        return {
            opacity: opacity
        };
    }, [opacity]);
    useAnimationLifecycle(visible, showAnimation, hideAnimation);
    return React.createElement(BaseBox, __assign({}, props, { style: animatedStyle }));
}
//# sourceMappingURL=FadeAnimation.js.map