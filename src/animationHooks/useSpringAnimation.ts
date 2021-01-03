import { useCallback } from 'react';
import { Animated, Platform } from 'react-native';

export function useSpringAnimation(
    animatedValue: Animated.Value,
    toValue: number | Animated.Value,
    speed?: number,
    bounciness?: number,
    callback?: () => void
): () => void {
    return useCallback(() => {
        Animated.spring(animatedValue, {
            toValue,
            useNativeDriver: Platform.OS !== 'web',
            speed,
            bounciness
        }).start(callback);
    }, [animatedValue, toValue, speed, bounciness, callback]);
}
