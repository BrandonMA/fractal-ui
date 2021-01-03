import { useCallback } from 'react';
import { Animated, Platform } from 'react-native';

export function useTimingAnimation(
    animatedValue: Animated.Value,
    toValue: number | Animated.Value,
    duration?: number,
    callback?: () => void
): () => void {
    return useCallback(() => {
        Animated.timing(animatedValue, {
            toValue,
            useNativeDriver: Platform.OS !== 'web',
            duration
        }).start(callback);
    }, [animatedValue, toValue, callback, duration]);
}
