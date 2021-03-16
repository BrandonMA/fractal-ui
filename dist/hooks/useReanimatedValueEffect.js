import { useSharedValue } from 'react-native-reanimated';
import { useEffect } from 'react';
export function useReanimatedValueEffect(initialValue, finalValue) {
    var animatedValue = useSharedValue(initialValue);
    useEffect(function () {
        if (finalValue != null) {
            animatedValue.value = finalValue;
        }
    }, [finalValue, animatedValue]);
    return animatedValue;
}
//# sourceMappingURL=useReanimatedValueEffect.js.map