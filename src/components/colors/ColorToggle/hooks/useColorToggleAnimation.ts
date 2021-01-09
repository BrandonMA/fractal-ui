import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, TextStyle } from 'react-native';
import { useHideAnimation, useShowAnimation } from '../../../../animationHooks';

export function useColorToggleAnimation(
    controlledActive?: boolean
): [boolean, Dispatch<SetStateAction<boolean>>, Animated.AnimatedProps<TextStyle>] {
    const [uncontrolledActive, setUncontrolledActive] = useState(false);
    const animatedValue = useRef(new Animated.Value(controlledActive || uncontrolledActive ? 1 : 0)).current;
    const showAnimation = useShowAnimation(animatedValue);
    const hideAnimation = useHideAnimation(animatedValue);

    useEffect(() => {
        if (uncontrolledActive || controlledActive) {
            showAnimation();
        } else {
            hideAnimation();
        }
    }, [uncontrolledActive, showAnimation, hideAnimation, controlledActive]);

    const animatedStyle = useMemo(() => {
        return { opacity: animatedValue, transform: [{ scale: animatedValue }] };
    }, [animatedValue]);

    return useMemo(() => [uncontrolledActive, setUncontrolledActive, animatedStyle], [
        uncontrolledActive,
        setUncontrolledActive,
        animatedStyle
    ]);
}
