import Reanimated, { useSharedValue } from 'react-native-reanimated';
import { useEffect } from 'react';

export function useReanimatedValueEffect(
    initialValue?: number | string,
    finalValue?: number | string
): Reanimated.SharedValue<number | string | undefined> {
    const animatedValue = useSharedValue(initialValue);

    useEffect(() => {
        if (finalValue != null) {
            animatedValue.value = finalValue;
        }
    }, [finalValue, animatedValue]);

    return animatedValue;
}
