import { useSharedValueCallbacks } from './useSharedValueCallbacks';
import { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import { insertSharedValueToStyles } from '../worklets/insertSharedValueToStyles';
import { insertSharedTransformValueToStyles } from '../worklets/insertSharedTransformValueToStyles';
import { useColorAnimationCallbacks } from './useColorAnimationCallbacks';
export function usePressableAnimationStyles(_a) {
    var whileTap = _a.whileTap, opacity = _a.opacity, width = _a.width, height = _a.height, backgroundColor = _a.backgroundColor, onPressOut = _a.onPressOut, onPressIn = _a.onPressIn;
    var _b = useSharedValueCallbacks(opacity !== null && opacity !== void 0 ? opacity : 1, whileTap === null || whileTap === void 0 ? void 0 : whileTap.opacity), opacityAnimatedValue = _b[0], animateOpacity = _b[1], resetOpacity = _b[2];
    var _c = useSharedValueCallbacks(width !== null && width !== void 0 ? width : '100%', whileTap === null || whileTap === void 0 ? void 0 : whileTap.width), widthAnimatedValue = _c[0], animateWidth = _c[1], resetWidth = _c[2];
    var _d = useSharedValueCallbacks(height !== null && height !== void 0 ? height : 0, whileTap === null || whileTap === void 0 ? void 0 : whileTap.height), heightAnimatedValue = _d[0], animateHeight = _d[1], resetHeight = _d[2];
    var _e = useSharedValueCallbacks(1, whileTap === null || whileTap === void 0 ? void 0 : whileTap.scale), scaleAnimatedValue = _e[0], animateScale = _e[1], resetScale = _e[2];
    var _f = useSharedValueCallbacks('0deg', whileTap === null || whileTap === void 0 ? void 0 : whileTap.rotate), rotationAnimatedValue = _f[0], animateRotation = _f[1], resetRotation = _f[2];
    var _g = useColorAnimationCallbacks(backgroundColor, whileTap === null || whileTap === void 0 ? void 0 : whileTap.backgroundColor), backgroundColorAnimatedValue = _g[0], backgroundColors = _g[1], animateBackgroundColor = _g[2], resetBackgroundColor = _g[3];
    var handlePressIn = function () {
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
    var handlePressOut = function () {
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
    var tapStyles = useAnimatedStyle(function () {
        var styles = {
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