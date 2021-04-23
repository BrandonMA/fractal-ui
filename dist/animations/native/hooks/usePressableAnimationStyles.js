import { useSharedValueCallbacks } from './useSharedValueCallbacks';
import { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import { insertSharedValueToStyles } from '../worklets/insertSharedValueToStyles';
import { insertSharedTransformValueToStyles } from '../worklets/insertSharedTransformValueToStyles';
import { useColorAnimationCallbacks } from './useColorAnimationCallbacks';
export function usePressableAnimationStyles({ whileTap, opacity, width, height, backgroundColor, onPressOut, onPressIn }) {
    const [opacityAnimatedValue, animateOpacity, resetOpacity] = useSharedValueCallbacks(opacity !== null && opacity !== void 0 ? opacity : 1, whileTap === null || whileTap === void 0 ? void 0 : whileTap.opacity);
    const [widthAnimatedValue, animateWidth, resetWidth] = useSharedValueCallbacks(width !== null && width !== void 0 ? width : '100%', whileTap === null || whileTap === void 0 ? void 0 : whileTap.width);
    const [heightAnimatedValue, animateHeight, resetHeight] = useSharedValueCallbacks(height !== null && height !== void 0 ? height : 0, whileTap === null || whileTap === void 0 ? void 0 : whileTap.height);
    const [scaleAnimatedValue, animateScale, resetScale] = useSharedValueCallbacks(1, whileTap === null || whileTap === void 0 ? void 0 : whileTap.scale);
    const [rotationAnimatedValue, animateRotation, resetRotation] = useSharedValueCallbacks('0deg', whileTap === null || whileTap === void 0 ? void 0 : whileTap.rotate);
    const [backgroundColorAnimatedValue, backgroundColors, animateBackgroundColor, resetBackgroundColor] = useColorAnimationCallbacks(backgroundColor, whileTap === null || whileTap === void 0 ? void 0 : whileTap.backgroundColor);
    const handlePressIn = () => {
        animateOpacity();
        animateBackgroundColor();
        animateWidth();
        animateHeight();
        animateScale();
        animateRotation();
        if (onPressIn) {
            onPressIn();
        }
    };
    const handlePressOut = () => {
        resetOpacity();
        resetBackgroundColor();
        resetWidth();
        resetHeight();
        resetScale();
        resetRotation();
        if (onPressOut) {
            onPressOut();
        }
    };
    const tapStyles = useAnimatedStyle(() => {
        const styles = {
            transform: []
        };
        insertSharedValueToStyles('opacity', styles, opacityAnimatedValue.value);
        insertSharedValueToStyles('width', styles, widthAnimatedValue.value);
        insertSharedValueToStyles('height', styles, heightAnimatedValue.value);
        if (backgroundColors.length === 2) {
            styles['backgroundColor'] = interpolateColor(backgroundColorAnimatedValue.value, [0, 1], backgroundColors);
        }
        insertSharedTransformValueToStyles('scale', styles, scaleAnimatedValue.value);
        insertSharedTransformValueToStyles('rotate', styles, rotationAnimatedValue.value);
        return styles;
    });
    return [tapStyles, handlePressIn, handlePressOut];
}
//# sourceMappingURL=usePressableAnimationStyles.js.map