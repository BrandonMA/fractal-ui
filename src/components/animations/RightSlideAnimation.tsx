import React, { useContext, useMemo, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useSpringAnimation, useTimingAnimation } from '../../animationHooks';
import { BaseBox, BaseBoxProps } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';

export function RightSlideAnimation(props: BaseBoxProps): JSX.Element {
    const [visible, setIsSafeToRemove] = useContext(AnimatedPresenceContext);

    const screenWidth = Dimensions.get('screen').width;
    const offsetX = useRef(new Animated.Value(screenWidth)).current;
    const showAnimation = useSpringAnimation(offsetX, 0);
    const hideAnimation = useTimingAnimation(offsetX, screenWidth, 300, setIsSafeToRemove);

    const animatedStyle = useMemo(() => {
        return {
            transform: [
                {
                    translateX: offsetX
                }
            ]
        };
    }, [offsetX]);

    useAnimationLifecycle(visible, showAnimation, hideAnimation);

    return <BaseBox {...props} style={animatedStyle} />;
}
