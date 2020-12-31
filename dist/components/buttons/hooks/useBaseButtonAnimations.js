import { useCallback, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useSpringAnimation } from '../../../animationHooks/useSpringAnimation';
export function useBaseButtonAnimations(props) {
    var style = props.style, onPressIn = props.onPressIn, onPressOut = props.onPressOut;
    var scaleValue = useRef(new Animated.Value(1)).current;
    var pressInAnimation = useSpringAnimation(scaleValue, 0.95);
    var pressOutAnimation = useSpringAnimation(scaleValue, 1);
    var handlePressIn = useCallback(function (event) {
        pressInAnimation();
        if (onPressIn != null) {
            onPressIn(event);
        }
    }, [pressInAnimation, onPressIn]);
    var handlePressOut = useCallback(function (event) {
        pressOutAnimation();
        if (onPressOut != null) {
            onPressOut(event);
        }
    }, [pressOutAnimation, onPressOut]);
    var finalStyle = useMemo(function () {
        return [
            style,
            {
                transform: [
                    {
                        scale: scaleValue
                    }
                ]
            }
        ];
    }, [scaleValue, style]);
    return useMemo(function () { return [handlePressIn, handlePressOut, finalStyle]; }, [handlePressIn, handlePressOut, finalStyle]);
}
//# sourceMappingURL=useBaseButtonAnimations.js.map