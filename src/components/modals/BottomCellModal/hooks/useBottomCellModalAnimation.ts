import { Animated, Dimensions, ViewStyle } from 'react-native';
import { useMemo, useRef } from 'react';
import { useSpringAnimation } from '../../../../animationHooks';

export function useBottomCellModalAnimation(): [Animated.AnimatedProps<ViewStyle>, () => void] {
    const screenHeight = Dimensions.get('screen').height;
    const yOffset = useRef(new Animated.Value(screenHeight)).current;
    const showAnimation = useSpringAnimation(yOffset, 0, 10, 4);

    const animatedStyle = useMemo(() => {
        return { transform: [{ translateY: yOffset }] };
    }, [yOffset]);

    return useMemo(() => [animatedStyle, showAnimation], [animatedStyle, showAnimation]);
}
