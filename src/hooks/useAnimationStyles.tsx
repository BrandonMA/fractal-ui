import { AnimationProps } from '../sharedProps';
import { useReanimatedValueEffect } from './useReanimatedValueEffect';
import { useAnimatedStyle } from 'react-native-reanimated';
import { ViewStyle } from 'react-native';
import { insertReanimatedValue } from '../util/insertReanimatedValue';
import { useAnimationContent } from './useAnimationContent';

export function useAnimationStyles({ initial, variants, animate }: AnimationProps): ViewStyle {
    const initialAnimationContent = useAnimationContent(initial, variants);
    const animateAnimationContent = useAnimationContent(animate, variants);

    const opacityAnimatedValue = useReanimatedValueEffect(initialAnimationContent.opacity, animateAnimationContent.opacity);
    const widthAnimatedValue = useReanimatedValueEffect(initialAnimationContent.width, animateAnimationContent.width);
    const heightAnimatedValue = useReanimatedValueEffect(initialAnimationContent.height, animateAnimationContent.height);
    const scaleAnimatedValue = useReanimatedValueEffect(initialAnimationContent.scale, animateAnimationContent.scale);
    const rotationAnimatedValue = useReanimatedValueEffect(initialAnimationContent.rotate, animateAnimationContent.rotate);
    const translateYAnimatedValue = useReanimatedValueEffect(initialAnimationContent.translateY, animateAnimationContent.translateY);
    const backgroundColorAnimatedValue = useReanimatedValueEffect(
        initialAnimationContent.backgroundColor,
        animateAnimationContent.backgroundColor
    );

    return useAnimatedStyle(() => {
        const styles: ViewStyle = {
            transform: []
        };

        insertReanimatedValue('opacity', styles, opacityAnimatedValue.value);
        insertReanimatedValue('width', styles, widthAnimatedValue.value);
        insertReanimatedValue('height', styles, heightAnimatedValue.value);
        insertReanimatedValue('backgroundColor', styles, backgroundColorAnimatedValue.value);
        insertReanimatedValue('scale', styles, scaleAnimatedValue.value, true);
        insertReanimatedValue('rotate', styles, rotationAnimatedValue.value, true);
        insertReanimatedValue('translateY', styles, translateYAnimatedValue.value, true);

        return styles;
    });
}
