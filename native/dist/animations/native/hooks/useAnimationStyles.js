import { useAnimatedStyle } from 'react-native-reanimated';
import { insertSharedValueToStyles } from '../worklets/insertSharedValueToStyles';
import { usePresence } from 'framer-motion';
import { useCallback } from 'react';
import { insertSharedTransformValueToStyles } from '../worklets/insertSharedTransformValueToStyles';
import { useAnimationContent } from './useAnimationContent';
import { useSharedValueEffect } from './useSharedValueEffect';
export function useAnimationStyles(_a) {
    var initial = _a.initial, animate = _a.animate, exit = _a.exit, variants = _a.variants;
    var _b = usePresence(), isPresent = _b[0], setIsSafeToRemove = _b[1];
    var initialAnimationContent = useAnimationContent(initial, variants);
    var animateAnimationContent = useAnimationContent(animate, variants);
    var exitAnimationContent = useAnimationContent(exit, variants);
    // Base properties
    var opacitySharedValue = useSharedValueEffect(initialAnimationContent.opacity, animateAnimationContent.opacity, exitAnimationContent.opacity, isPresent);
    var widthSharedValue = useSharedValueEffect(initialAnimationContent.width, animateAnimationContent.width, exitAnimationContent.width, isPresent);
    var heightSharedValue = useSharedValueEffect(initialAnimationContent.height, animateAnimationContent.height, exitAnimationContent.height, isPresent);
    var backgroundColorSharedValue = useSharedValueEffect(initialAnimationContent.backgroundColor, animateAnimationContent.backgroundColor, exitAnimationContent.backgroundColor, isPresent);
    // Transform properties
    var scaleSharedValue = useSharedValueEffect(initialAnimationContent.scale, animateAnimationContent.scale, exitAnimationContent.scale, isPresent);
    var rotationSharedValue = useSharedValueEffect(initialAnimationContent.rotate, animateAnimationContent.rotate, exitAnimationContent.rotate, isPresent);
    var translateYSharedValue = useSharedValueEffect(initialAnimationContent.translateY, animateAnimationContent.translateY, exitAnimationContent.translateY, isPresent);
    var removeIfNeeded = useCallback(function (finished) {
        if (!isPresent && finished && setIsSafeToRemove) {
            setIsSafeToRemove();
        }
    }, [isPresent, setIsSafeToRemove]);
    return useAnimatedStyle(function () {
        var styles = {
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
//# sourceMappingURL=useAnimationStyles.js.map