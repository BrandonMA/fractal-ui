import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import { useCallback, useMemo } from 'react';
export function useColorAnimationCallbacks(backgroundColor, pressedBackgroundColor) {
    var animatedValue = useSharedValue(0);
    var colorsAvailable = useMemo(function () { return backgroundColor != null && pressedBackgroundColor != null; }, [
        backgroundColor,
        pressedBackgroundColor
    ]);
    var colors = useMemo(function () {
        var colors = Array();
        if (backgroundColor != null) {
            colors.push(backgroundColor);
        }
        if (pressedBackgroundColor != null) {
            colors.push(pressedBackgroundColor);
        }
        return colors;
    }, [backgroundColor, pressedBackgroundColor]);
    var startAnimation = useCallback(function () {
        if (colorsAvailable) {
            animatedValue.value = withTiming(1, { duration: 200, easing: Easing.ease });
        }
    }, [animatedValue, colorsAvailable]);
    var resetAnimation = useCallback(function () {
        if (colorsAvailable) {
            animatedValue.value = withTiming(0, { duration: 200, easing: Easing.ease });
        }
    }, [animatedValue, colorsAvailable]);
    return [animatedValue, colors, startAnimation, resetAnimation];
}
//# sourceMappingURL=useColorAnimationCallbacks.js.map