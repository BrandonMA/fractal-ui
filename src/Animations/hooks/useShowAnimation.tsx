import { useCallback } from 'react';
import { Animated, Platform } from 'react-native';

export function useShowAnimation(value: Animated.Value, callback?: () => void): () => void {
    return useCallback(() => {
        Animated.spring(value, {
            toValue: 1,
            useNativeDriver: !(Platform.OS === 'web')
        }).start(callback);
    }, [value, callback]);
}
