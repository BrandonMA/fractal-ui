import { useCallback } from 'react';
import { Animated, Platform } from 'react-native';
export function useSpringAnimation(animatedValue, toValue, callback) {
    return useCallback(function () {
        Animated.spring(animatedValue, {
            toValue: toValue,
            useNativeDriver: Platform.OS !== 'web'
        }).start(callback);
    }, [animatedValue, toValue, callback]);
}
//# sourceMappingURL=useSpringAnimation.js.map