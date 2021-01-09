import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated } from 'react-native';
import { useHideAnimation, useShowAnimation } from '../../../../animationHooks';
export function useColorToggleAnimation(controlledActive) {
    var _a = useState(false), uncontrolledActive = _a[0], setUncontrolledActive = _a[1];
    var animatedValue = useRef(new Animated.Value(controlledActive || uncontrolledActive ? 1 : 0)).current;
    var showAnimation = useShowAnimation(animatedValue);
    var hideAnimation = useHideAnimation(animatedValue);
    useEffect(function () {
        if (uncontrolledActive || controlledActive) {
            showAnimation();
        }
        else {
            hideAnimation();
        }
    }, [uncontrolledActive, showAnimation, hideAnimation, controlledActive]);
    var animatedStyle = useMemo(function () {
        return { opacity: animatedValue, transform: [{ scale: animatedValue }] };
    }, [animatedValue]);
    return useMemo(function () { return [uncontrolledActive, setUncontrolledActive, animatedStyle]; }, [
        uncontrolledActive,
        setUncontrolledActive,
        animatedStyle
    ]);
}
//# sourceMappingURL=useColorToggleAnimation.js.map