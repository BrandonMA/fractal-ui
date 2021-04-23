import { useSharedValue } from 'react-native-reanimated';
import { useEffect } from 'react';
export function useSharedValueEffect(initialValue, finalValue, exitValue, isPresent = true) {
    const animatedValue = useSharedValue(initialValue);
    useEffect(() => {
        if (finalValue != null && isPresent) {
            animatedValue.value = finalValue;
        }
        else if (exitValue != null && !isPresent) {
            animatedValue.value = exitValue;
        }
    }, [finalValue, animatedValue, isPresent, exitValue]);
    return animatedValue;
}
//# sourceMappingURL=useSharedValueEffect.js.map