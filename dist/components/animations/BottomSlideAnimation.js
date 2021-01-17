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
export function BottomSlideAnimation(props) {
    var _a = useContext(AnimatedPresenceContext), visible = _a[0], setIsSafeToRemove = _a[1];
    var screenHeight = Dimensions.get('screen').height;
    var offsetY = useRef(new Animated.Value(screenHeight)).current;
    var showAnimation = useSpringAnimation(offsetY, 0);
    var hideAnimation = useTimingAnimation(offsetY, screenHeight, 300, setIsSafeToRemove);
    var animatedStyle = useMemo(function () {
        return {
            transform: [
                {
                    translateY: offsetY
                }
            ]
        };
    }, [offsetY]);
    useAnimationLifecycle(visible, showAnimation, hideAnimation);
    return React.createElement(BaseBox, __assign({}, props, { style: animatedStyle }));
}
//# sourceMappingURL=BottomSlideAnimation.js.map