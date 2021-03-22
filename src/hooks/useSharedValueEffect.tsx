import Reanimated, { useSharedValue } from 'react-native-reanimated';
import { useEffect } from 'react';

export function useSharedValueEffect(
    initialValue?: number | string,
    finalValue?: number | string,
    exitValue?: number | string,
    isPresent = true
): Reanimated.SharedValue<number | string | undefined> {
    const animatedValue = useSharedValue(initialValue);

    useEffect(() => {
        if (finalValue != null && isPresent) {
            animatedValue.value = finalValue;
        } else if (exitValue != null && !isPresent) {
            animatedValue.value = exitValue;
        }
    }, [finalValue, animatedValue, isPresent, exitValue]);

    return animatedValue;
}
