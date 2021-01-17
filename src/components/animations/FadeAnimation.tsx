import React, { useContext, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useTimingAnimation } from '../../animationHooks';
import { BaseBox, BaseBoxProps } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';

export interface FadeAnimationProps extends Partial<BaseBoxProps> {
    activeOpacity?: number;
}

export function FadeAnimation({ activeOpacity = 1, ...others }: FadeAnimationProps): JSX.Element {
    const [visible, setIsSafeToRemove] = useContext(AnimatedPresenceContext);

    const opacity = useRef(new Animated.Value(0)).current;
    const showAnimation = useTimingAnimation(opacity, activeOpacity, 600);
    const hideAnimation = useTimingAnimation(opacity, 0, 200, setIsSafeToRemove);

    const animatedStyle = useMemo(() => {
        return {
            opacity
        };
    }, [opacity]);

    useAnimationLifecycle(visible, showAnimation, hideAnimation);

    return <BaseBox {...others} style={animatedStyle} />;
}
