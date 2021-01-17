import React, { useContext, useMemo, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useSpringAnimation } from '../../animationHooks';
import { BaseBox, BaseBoxProps } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';

export function SlideVerticallyAnimation(props: BaseBoxProps): JSX.Element {
    const [visible, setIsSafeToRemove] = useContext(AnimatedPresenceContext);

    const screenHeight = Dimensions.get('screen').height;
    const offsetY = useRef(new Animated.Value(screenHeight)).current;
    const showAnimation = useSpringAnimation(offsetY, 0);
    const hideAnimation = useSpringAnimation(offsetY, screenHeight, undefined, undefined, setIsSafeToRemove);

    const animatedStyle = useMemo(() => {
        return {
            transform: [
                {
                    translateY: offsetY
                }
            ]
        };
    }, [offsetY]);

    useAnimationLifecycle(visible, showAnimation, hideAnimation);

    return <BaseBox {...props} style={animatedStyle} />;
}