import { useCallback } from 'react';
import { Animated, Platform } from 'react-native';

export function useSpringAnimation(animatedValue: Animated.Value, toValue: number | Animated.Value, callback?: () => void): () => void {
    return useCallback(() => {
        Animated.spring(animatedValue, {
            toValue,
            useNativeDriver: Platform.OS !== 'web'
        }).start(callback);
    }, [animatedValue, toValue, callback]);
}
