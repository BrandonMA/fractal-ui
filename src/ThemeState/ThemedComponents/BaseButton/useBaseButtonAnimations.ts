import { useCallback, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useSpringAnimation } from '../../../Animations';
import { BaseButtonProps } from './BaseButtonProps';

export function useBaseButtonAnimations(props: BaseButtonProps) {
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
        [pressInAnimation, showShadowAnimation, onPressOut]
    );

    const finalStyle = useMemo(() => {
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

    return useMemo(() => [handlePressIn, handlePressOut, finalStyle], [handlePressIn, handlePressOut, finalStyle]);
}
