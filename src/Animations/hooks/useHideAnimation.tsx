import { useCallback } from 'react';
import { Animated, Platform } from 'react-native';

export function useHideAnimation(value: Animated.Value): () => void {
    return useCallback(() => {
        Animated.spring(value, {
            toValue: 0,
            useNativeDriver: !(Platform.OS === 'web')
        }).start();
    }, []);
}
