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
import { Animated, Dimensions } from 'react-native';
import { useSpringAnimation, useTimingAnimation } from '../../animationHooks';
import { BaseBox } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';
export function LeftSlideAnimation(props) {
    var _a = useContext(AnimatedPresenceContext), visible = _a[0], setIsSafeToRemove = _a[1];
    var screenWidth = Dimensions.get('screen').width;
    var offsetX = useRef(new Animated.Value(-screenWidth)).current;
    var showAnimation = useSpringAnimation(offsetX, 0);
    var hideAnimation = useTimingAnimation(offsetX, -screenWidth, 300, setIsSafeToRemove);
    var animatedStyle = useMemo(function () {
        return {
            transform: [
                {
                    translateX: offsetX
                }
            ]
        };
    }, [offsetX]);
    useAnimationLifecycle(visible, showAnimation, hideAnimation);
    return React.createElement(BaseBox, __assign({}, props, { style: animatedStyle }));
}
//# sourceMappingURL=LeftSlideAnimation.js.map