import { Animated, Dimensions } from 'react-native';
import { useMemo, useRef } from 'react';
import { useSpringAnimation } from '../../../../animationHooks';
export function useBottomCellModalAnimation() {
    var screenHeight = Dimensions.get('screen').height;
    var yOffset = useRef(new Animated.Value(screenHeight)).current;
    var showAnimation = useSpringAnimation(yOffset, 0, 10, 4);
    var animatedStyle = useMemo(function () {
        return { transform: [{ translateY: yOffset }] };
    }, [yOffset]);
    return useMemo(function () { return [animatedStyle, showAnimation]; }, [animatedStyle, showAnimation]);
}
//# sourceMappingURL=useBottomCellModalAnimation.js.map