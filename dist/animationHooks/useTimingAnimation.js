import { useCallback } from 'react';
import { Animated, Platform } from 'react-native';
export function useTimingAnimation(animatedValue, toValue, duration, callback) {
    return useCallback(function () {
        Animated.timing(animatedValue, {
            toValue: toValue,
            useNativeDriver: Platform.OS !== 'web',
            duration: duration
        }).start(callback);
    }, [animatedValue, toValue, callback, duration]);
}
//# sourceMappingURL=useTimingAnimation.js.map