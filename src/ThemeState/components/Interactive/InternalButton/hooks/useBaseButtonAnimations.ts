import { useCallback, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useSpringAnimation } from '../../../../../Animations';
import { InternalButtonProps } from '../types/InternalButtonProps';

export function useBaseButtonAnimations(props: InternalButtonProps): [(event: unknown) => void, (event: unknown) => void, unknown] {
    const { style, removeShadow, onPressIn, onPressOut } = props;

    const scaleValue = useRef(new Animated.Value(1)).current;
    const pressInAnimation = useSpringAnimation(scaleValue, 0.95);
    const pressOutAnimation = useSpringAnimation(scaleValue, 1);

    const shadowValue = useRef(new Animated.Value(0.5)).current;
    const hideShadowAnimation = useSpringAnimation(shadowValue, 0);
    const showShadowAnimation = useSpringAnimation(shadowValue, 0.5);

    const handlePressIn = useCallback(
        (event) => {
            pressInAnimation();
            hideShadowAnimation();
            if (onPressIn != null) {
                onPressIn(event);
            }
        },
        [pressInAnimation, hideShadowAnimation, onPressIn]
    );

    const handlePressOut = useCallback(
        (event) => {
            pressOutAnimation();
            showShadowAnimation();
            if (onPressOut != null) {
                onPressOut(event);
            }
        },
        [pressOutAnimation, showShadowAnimation, onPressOut]
    );

    const finalStyle = useMemo(() => {
        return [
            style,
            {
                shadowOpacity: removeShadow ? 0 : shadowValue,
                elevation: removeShadow ? 0 : 1,
                transform: [
                    {
                        scale: scaleValue
                    }
                ]
            }
        ];
    }, [shadowValue, scaleValue, style, removeShadow]);

    return useMemo(() => [handlePressIn, handlePressOut, finalStyle], [handlePressIn, handlePressOut, finalStyle]);
}