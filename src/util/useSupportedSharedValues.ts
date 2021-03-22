import { AnimationContent, Variants } from '../sharedProps';
import { useAnimationContent } from '../hooks/useAnimationContent';
import { useSharedValueEffect } from '../hooks/useSharedValueEffect';
import Reanimated from 'react-native-reanimated';

export function useSupportedSharedValues(
    initial: string | AnimationContent | undefined,
    animate: string | AnimationContent | undefined,
    exit: string | AnimationContent | undefined,
    variants: Variants | undefined,
    isPresent: boolean
): [
    Reanimated.SharedValue<string | number | undefined>,
    Reanimated.SharedValue<string | number | undefined>,
    Reanimated.SharedValue<string | number | undefined>,
    Reanimated.SharedValue<string | number | undefined>,
    Reanimated.SharedValue<string | number | undefined>,
    Reanimated.SharedValue<string | number | undefined>,
    Reanimated.SharedValue<string | number | undefined>
] {
    const initialAnimationContent = useAnimationContent(initial, variants);
    const animateAnimationContent = useAnimationContent(animate, variants);
    const exitAnimationContent = useAnimationContent(exit, variants);

    // Base properties

    const opacityAnimatedValue = useSharedValueEffect(
        initialAnimationContent.opacity,
        animateAnimationContent.opacity,
        exitAnimationContent.opacity,
        isPresent
    );

    const widthAnimatedValue = useSharedValueEffect(
        initialAnimationContent.width,
        animateAnimationContent.width,
        exitAnimationContent.width,
        isPresent
    );

    const heightAnimatedValue = useSharedValueEffect(
        initialAnimationContent.height,
        animateAnimationContent.height,
        exitAnimationContent.height,
        isPresent
    );

    const backgroundColorAnimatedValue = useSharedValueEffect(
        initialAnimationContent.backgroundColor,
        animateAnimationContent.backgroundColor,
        exitAnimationContent.backgroundColor,
        isPresent
    );

    // Transform properties

    const scaleAnimatedValue = useSharedValueEffect(
        initialAnimationContent.scale,
        animateAnimationContent.scale,
        exitAnimationContent.scale,
        isPresent
    );

    const rotationAnimatedValue = useSharedValueEffect(
        initialAnimationContent.rotate,
        animateAnimationContent.rotate,
        exitAnimationContent.rotate,
        isPresent
    );

    const translateYAnimatedValue = useSharedValueEffect(
        initialAnimationContent.translateY,
        animateAnimationContent.translateY,
        exitAnimationContent.translateY,
        isPresent
    );

    return [
        opacityAnimatedValue,
        widthAnimatedValue,
        heightAnimatedValue,
        scaleAnimatedValue,
        rotationAnimatedValue,
        translateYAnimatedValue,
        backgroundColorAnimatedValue
    ];
}
