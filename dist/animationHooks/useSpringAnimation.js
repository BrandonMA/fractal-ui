import { useCallback } from 'react';
import { Animated, Platform } from 'react-native';
export function useSpringAnimation(animatedValue, toValue, speed, bounciness, callback) {
    return useCallback(function () {
        Animated.spring(animatedValue, {
            toValue: toValue,
            useNativeDriver: Platform.OS !== 'web',
            speed: speed,
            bounciness: bounciness
        }).start(callback);
    }, [animatedValue, toValue, speed, bounciness, callback]);
}
//# sourceMappingURL=useSpringAnimation.js.map