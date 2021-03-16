import { useSharedValue } from 'react-native-reanimated';
import { useCallback } from 'react';
export function useReanimatedValueCallback(initialValue, finalValue) {
    var animatedValue = useSharedValue(initialValue);
    var startAnimation = useCallback(function () {
        if (finalValue != null && animatedValue.value !== finalValue) {
            animatedValue.value = finalValue;
        }
    }, [animatedValue, finalValue]);
    var resetAnimation = useCallback(function () {
        if (initialValue != null && animatedValue.value !== initialValue) {
            animatedValue.value = initialValue;
        }
    }, [animatedValue, initialValue]);
    return [animatedValue, startAnimation, resetAnimation];
}
//# sourceMappingURL=useReanimatedValueCallback.js.map