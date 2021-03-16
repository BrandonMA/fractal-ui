import { useReanimatedValueEffect } from './useReanimatedValueEffect';
import { useAnimatedStyle } from 'react-native-reanimated';
import { insertReanimatedValue } from '../util/insertReanimatedValue';
import { useAnimationContent } from './useAnimationContent';
export function useAnimationStyles(_a) {
    var initial = _a.initial, variants = _a.variants, animate = _a.animate;
    var initialAnimationContent = useAnimationContent(initial, variants);
    var animateAnimationContent = useAnimationContent(animate, variants);
    var opacityAnimatedValue = useReanimatedValueEffect(initialAnimationContent.opacity, animateAnimationContent.opacity);
    var widthAnimatedValue = useReanimatedValueEffect(initialAnimationContent.width, animateAnimationContent.width);
    var heightAnimatedValue = useReanimatedValueEffect(initialAnimationContent.height, animateAnimationContent.height);
    var scaleAnimatedValue = useReanimatedValueEffect(initialAnimationContent.scale, animateAnimationContent.scale);
    var rotationAnimatedValue = useReanimatedValueEffect(initialAnimationContent.rotate, animateAnimationContent.rotate);
    var translateYAnimatedValue = useReanimatedValueEffect(initialAnimationContent.translateY, animateAnimationContent.translateY);
    var backgroundColorAnimatedValue = useReanimatedValueEffect(initialAnimationContent.backgroundColor, animateAnimationContent.backgroundColor);
    return useAnimatedStyle(function () {
        var styles = {
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
//# sourceMappingURL=useAnimationStyles.js.map