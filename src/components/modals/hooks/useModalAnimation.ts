import { Animated, Dimensions, ViewStyle } from 'react-native';
import { useCallback, useMemo, useRef } from 'react';
import { useSpringAnimation } from '../../../animationHooks';

export function useModalAnimation(onDismiss: (() => void) | undefined): [Animated.AnimatedProps<ViewStyle>, () => void, () => void] {
    const screenHeight = Dimensions.get('screen').height;
    const yOffset = useRef(new Animated.Value(screenHeight)).current;
    const showAnimation = useSpringAnimation(yOffset, 0);
    const hideAnimation = useSpringAnimation(yOffset, screenHeight);

    const animatedStyle = useMemo(() => {
        return { transform: [{ translateY: yOffset }] };
    }, [yOffset]);

    const animatedDismiss = useCallback(() => {
        hideAnimation();
        if (onDismiss) {
            setTimeout(onDismiss, 130);
        }
    }, [hideAnimation, onDismiss]);

    return useMemo(() => [animatedStyle, showAnimation, animatedDismiss], [animatedStyle, showAnimation, animatedDismiss]);
}
