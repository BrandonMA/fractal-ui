import React, { useContext, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useTimingAnimation } from '../../animationHooks';
import { BaseBox, BaseBoxProps } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';
import { useHideCallback } from './hooks/useHideCallback';

export interface FadeAnimationProps extends Partial<BaseBoxProps> {
    activeOpacity?: number;
    onHide?: () => void;
}

export function FadeAnimation({ activeOpacity = 1, onHide, style, ...others }: FadeAnimationProps): JSX.Element {
    const [visible, setIsSafeToRemove] = useContext(AnimatedPresenceContext);

    const handleHide = useHideCallback(setIsSafeToRemove, onHide);

    const opacity = useRef(new Animated.Value(0)).current;
    const showAnimation = useTimingAnimation(opacity, activeOpacity, 600);
    const hideAnimation = useTimingAnimation(opacity, 0, 200, handleHide);

    const animatedStyle = useMemo(() => {
        return [
            style,
            {
                opacity
            }
        ];
    }, [opacity, style]);

    useAnimationLifecycle(visible, showAnimation, hideAnimation);

    return <BaseBox {...others} style={animatedStyle} />;
}
