import { AnimationProps } from '../sharedProps';
import { useReanimatedValueEffect } from './useReanimatedValueEffect';
import { useAnimatedStyle } from 'react-native-reanimated';
import { ViewStyle } from 'react-native';
import { insertReanimatedValue } from '../util/insertReanimatedValue';
import { useAnimationContent } from './useAnimationContent';
import { usePresence } from 'framer-motion';
import { useCallback } from 'react';

export function useAnimationStyles({ initial, variants, animate, exit }: AnimationProps): ViewStyle {
    const initialAnimationContent = useAnimationContent(initial, variants);
    const animateAnimationContent = useAnimationContent(animate, variants);
    const exitAnimationContent = useAnimationContent(exit, variants);
    const [isPresent, setIsSafeToRemove] = usePresence();

    const removeIfNeeded = useCallback(
        (finished: boolean) => {
            if (!isPresent && finished && setIsSafeToRemove) {
                setIsSafeToRemove();
            }
        },
        [isPresent, setIsSafeToRemove]
    );

    const opacityAnimatedValue = useReanimatedValueEffect(
        initialAnimationContent.opacity,
        animateAnimationContent.opacity,
        exitAnimationContent.opacity,
        isPresent
    );

    const widthAnimatedValue = useReanimatedValueEffect(
        initialAnimationContent.width,
        animateAnimationContent.width,
        exitAnimationContent.width,
        isPresent
    );

    const heightAnimatedValue = useReanimatedValueEffect(
        initialAnimationContent.height,
        animateAnimationContent.height,
        exitAnimationContent.height,
        isPresent
    );

    const scaleAnimatedValue = useReanimatedValueEffect(
        initialAnimationContent.scale,
        animateAnimationContent.scale,
        exitAnimationContent.scale,
        isPresent
    );

    const rotationAnimatedValue = useReanimatedValueEffect(
        initialAnimationContent.rotate,
        animateAnimationContent.rotate,
        exitAnimationContent.rotate,
        isPresent
    );

    const translateYAnimatedValue = useReanimatedValueEffect(
        initialAnimationContent.translateY,
        animateAnimationContent.translateY,
        exitAnimationContent.translateY,
        isPresent
    );

    const backgroundColorAnimatedValue = useReanimatedValueEffect(
        initialAnimationContent.backgroundColor,
        animateAnimationContent.backgroundColor,
        exitAnimationContent.backgroundColor,
        isPresent
    );

    return useAnimatedStyle(() => {
        const styles: ViewStyle = {
            transform: []
        };

        insertReanimatedValue('opacity', styles, opacityAnimatedValue.value, false, removeIfNeeded);
        insertReanimatedValue('width', styles, widthAnimatedValue.value, false, removeIfNeeded);
        insertReanimatedValue('height', styles, heightAnimatedValue.value, false, removeIfNeeded);
        insertReanimatedValue('backgroundColor', styles, backgroundColorAnimatedValue.value, false, removeIfNeeded);

        insertReanimatedValue('scale', styles, scaleAnimatedValue.value, true, removeIfNeeded);
        insertReanimatedValue('rotate', styles, rotationAnimatedValue.value, true, removeIfNeeded);
        insertReanimatedValue('translateY', styles, translateYAnimatedValue.value, true, removeIfNeeded);

        return styles;
    });
}
