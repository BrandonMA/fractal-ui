import { AnimationProps } from '../../../sharedProps';
import { useAnimatedStyle } from 'react-native-reanimated';
import { ViewStyle } from 'react-native';
import { insertSharedValueToStyles } from '../worklets/insertSharedValueToStyles';
import { usePresence } from 'framer-motion';
import { useCallback } from 'react';
import { insertSharedTransformValueToStyles } from '../worklets/insertSharedTransformValueToStyles';
import { useAnimationContent } from './useAnimationContent';
import { useSharedValueEffect } from './useSharedValueEffect';

export function useAnimationStyles({ initial, animate, exit, variants }: AnimationProps): ViewStyle {
    const [isPresent, setIsSafeToRemove] = usePresence();

    const initialAnimationContent = useAnimationContent(initial, variants);
    const animateAnimationContent = useAnimationContent(animate, variants);
    const exitAnimationContent = useAnimationContent(exit, variants);

    // Base properties

    const opacitySharedValue = useSharedValueEffect(
        initialAnimationContent.opacity,
        animateAnimationContent.opacity,
        exitAnimationContent.opacity,
        isPresent
    );

    const widthSharedValue = useSharedValueEffect(
        initialAnimationContent.width,
        animateAnimationContent.width,
        exitAnimationContent.width,
        isPresent
    );

    const heightSharedValue = useSharedValueEffect(
        initialAnimationContent.height,
        animateAnimationContent.height,
        exitAnimationContent.height,
        isPresent
    );

    const backgroundColorSharedValue = useSharedValueEffect(
        initialAnimationContent.backgroundColor,
        animateAnimationContent.backgroundColor,
        exitAnimationContent.backgroundColor,
        isPresent
    );

    // Transform properties

    const scaleSharedValue = useSharedValueEffect(
        initialAnimationContent.scale,
        animateAnimationContent.scale,
        exitAnimationContent.scale,
        isPresent
    );

    const rotationSharedValue = useSharedValueEffect(
        initialAnimationContent.rotate,
        animateAnimationContent.rotate,
        exitAnimationContent.rotate,
        isPresent
    );

    const translateYSharedValue = useSharedValueEffect(
        initialAnimationContent.translateY,
        animateAnimationContent.translateY,
        exitAnimationContent.translateY,
        isPresent
    );

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
