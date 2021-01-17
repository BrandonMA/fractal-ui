import { Animated, Dimensions } from 'react-native';
import { useCallback, useMemo, useRef } from 'react';
import { useSpringAnimation } from '../../../animationHooks';
export function useModalAnimation(onDismiss) {
    var screenHeight = Dimensions.get('screen').height;
    var yOffset = useRef(new Animated.Value(screenHeight)).current;
    var showAnimation = useSpringAnimation(yOffset, 0);
    var hideAnimation = useSpringAnimation(yOffset, screenHeight);
    var animatedStyle = useMemo(function () {
        return { transform: [{ translateY: yOffset }] };
    }, [yOffset]);
    var animatedDismiss = useCallback(function () {
        hideAnimation();
        if (onDismiss) {
            setTimeout(onDismiss, 130);
        }
    }, [hideAnimation, onDismiss]);
    return useMemo(function () { return [animatedStyle, showAnimation, animatedDismiss]; }, [animatedStyle, showAnimation, animatedDismiss]);
}
//# sourceMappingURL=useModalAnimation.js.map