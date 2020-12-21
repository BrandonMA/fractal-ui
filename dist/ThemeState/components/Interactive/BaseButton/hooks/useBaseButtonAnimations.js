import { useCallback, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useSpringAnimation } from '../../../../../Animations';
export function useBaseButtonAnimations(props) {
    var style = props.style, removeShadow = props.removeShadow, onPressIn = props.onPressIn, onPressOut = props.onPressOut;
    var scaleValue = useRef(new Animated.Value(1)).current;
    var pressInAnimation = useSpringAnimation(scaleValue, 0.95);
    var pressOutAnimation = useSpringAnimation(scaleValue, 1);
    var shadowValue = useRef(new Animated.Value(0.5)).current;
    var hideShadowAnimation = useSpringAnimation(shadowValue, 0);
    var showShadowAnimation = useSpringAnimation(shadowValue, 0.5);
    var handlePressIn = useCallback(function (event) {
        pressInAnimation();
        hideShadowAnimation();
        if (onPressIn != null) {
            onPressIn(event);
        }
    }, [pressInAnimation, hideShadowAnimation, onPressIn]);
    var handlePressOut = useCallback(function (event) {
        pressOutAnimation();
        showShadowAnimation();
        if (onPressOut != null) {
            onPressOut(event);
        }
    }, [pressInAnimation, showShadowAnimation, onPressOut]);
    var finalStyle = useMemo(function () {
        return [
            style,
            {
                shadowOpacity: removeShadow ? 0 : shadowValue,
                transform: [
                    {
                        scale: scaleValue
                    }
                ]
            }
        ];
    }, [shadowValue, scaleValue, style]);
    return useMemo(function () { return [handlePressIn, handlePressOut, finalStyle]; }, [handlePressIn, handlePressOut, finalStyle]);
}
//# sourceMappingURL=useBaseButtonAnimations.js.map