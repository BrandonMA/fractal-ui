import Reanimated, { useSharedValue } from 'react-native-reanimated';
import { useCallback } from 'react';

export function useReanimatedValueCallback(
    initialValue?: number | string,
    finalValue?: number | string
): [Reanimated.SharedValue<number | string | undefined>, () => void, () => void] {
    const animatedValue = useSharedValue<undefined | number | string>(initialValue);

    const startAnimation = useCallback(() => {
        if (finalValue != null && animatedValue.value !== finalValue) {
            animatedValue.value = finalValue;
        }
    }, [animatedValue, finalValue]);

    const resetAnimation = useCallback(() => {
        if (initialValue != null && animatedValue.value !== initialValue) {
            animatedValue.value = initialValue;
        }
    }, [animatedValue, initialValue]);

    return [animatedValue, startAnimation, resetAnimation];
}
