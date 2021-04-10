import { useReanimatedValueCallback } from './useReanimatedValueCallback';
import { useAnimatedStyle } from 'react-native-reanimated';
import { insertReanimatedValue } from '../util/insertReanimatedValue';
export function usePressableAnimationStyles(_a) {
    var opacity = _a.opacity, whileTap = _a.whileTap, width = _a.width, height = _a.height, backgroundColor = _a.backgroundColor, onPressOut = _a.onPressOut, onPressIn = _a.onPressIn;
    var _b = useReanimatedValueCallback(opacity !== null && opacity !== void 0 ? opacity : 1, whileTap === null || whileTap === void 0 ? void 0 : whileTap.opacity), opacityAnimatedValue = _b[0], animateOpacity = _b[1], resetOpacity = _b[2];
    var _c = useReanimatedValueCallback(width !== null && width !== void 0 ? width : '100%', whileTap === null || whileTap === void 0 ? void 0 : whileTap.width), widthAnimatedValue = _c[0], animateWidth = _c[1], resetWidth = _c[2];
    var _d = useReanimatedValueCallback(height !== null && height !== void 0 ? height : 0, whileTap === null || whileTap === void 0 ? void 0 : whileTap.height), heightAnimatedValue = _d[0], animateHeight = _d[1], resetHeight = _d[2];
    var _e = useReanimatedValueCallback(1, whileTap === null || whileTap === void 0 ? void 0 : whileTap.scale), scaleAnimatedValue = _e[0], animateScale = _e[1], resetScale = _e[2];
    var _f = useReanimatedValueCallback('0deg', whileTap === null || whileTap === void 0 ? void 0 : whileTap.rotate), rotationAnimatedValue = _f[0], animateRotation = _f[1], resetRotation = _f[2];
    var _g = useReanimatedValueCallback(backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : 'transparent', whileTap === null || whileTap === void 0 ? void 0 : whileTap.backgroundColor), backgroundColorAnimatedValue = _g[0], animateBackgroundColor = _g[1], resetBackgroundColor = _g[2];
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
        insertReanimatedValue('opacity', styles, opacityAnimatedValue.value);
        insertReanimatedValue('width', styles, widthAnimatedValue.value);
        insertReanimatedValue('height', styles, heightAnimatedValue.value);
        insertReanimatedValue('backgroundColor', styles, backgroundColorAnimatedValue.value);
        insertReanimatedValue('scale', styles, scaleAnimatedValue.value, true);
        insertReanimatedValue('rotate', styles, rotationAnimatedValue.value, true);
        return styles;
    });
    return [tapStyles, handlePressIn, handlePressOut];
}
//# sourceMappingURL=usePressableAnimationStyles.js.map