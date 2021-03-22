import { AnimationProps } from '../sharedProps';
import { useAnimatedStyle } from 'react-native-reanimated';
import { ViewStyle } from 'react-native';
import { insertSharedValueToStyles } from '../util/insertSharedValueToStyles';
import { usePresence } from 'framer-motion';
import { useCallback } from 'react';
import { insertSharedTransformValueToStyles } from '../util/insertSharedTransformValueToStyles';
import { useSupportedSharedValues } from '../util/useSupportedSharedValues';

export function useAnimationStyles({ initial, animate, exit, variants }: AnimationProps): ViewStyle {
    const [isPresent, setIsSafeToRemove] = usePresence();

    const [
        opacitySharedValue,
        widthSharedValue,
        heightSharedValue,
        backgroundColorSharedValue,
        scaleSharedValue,
        rotationSharedValue,
        translateYSharedValue
    ] = useSupportedSharedValues(initial, animate, exit, variants, isPresent);

    const removeIfNeeded = useCallback(
        (finished: boolean) => {
            if (!isPresent && finished && setIsSafeToRemove) {
                setIsSafeToRemove();
            }
        },
        [isPresent, setIsSafeToRemove]
    );

    return useAnimatedStyle(() => {
        const styles: ViewStyle = {
            transform: []
        };

        insertSharedValueToStyles('opacity', styles, opacitySharedValue.value, removeIfNeeded);
        insertSharedValueToStyles('width', styles, widthSharedValue.value, removeIfNeeded);
        insertSharedValueToStyles('height', styles, heightSharedValue.value, removeIfNeeded);
        insertSharedValueToStyles('backgroundColor', styles, backgroundColorSharedValue.value, removeIfNeeded);

        insertSharedTransformValueToStyles('scale', styles, scaleSharedValue.value, removeIfNeeded);
        insertSharedTransformValueToStyles('rotate', styles, rotationSharedValue.value, removeIfNeeded);
        insertSharedTransformValueToStyles('translateY', styles, translateYSharedValue.value, removeIfNeeded);

        return styles;
    });
}
