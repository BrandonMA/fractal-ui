import React, { useContext, useMemo, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useSpringAnimation, useTimingAnimation } from '../../animationHooks';
import { BaseBox, BaseBoxProps } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';
import { useHideCallback } from './hooks/useHideCallback';
import { hideAnimationTiming } from './util/hideAnimationTiming';

export interface LeftSlideAnimationProps extends Partial<BaseBoxProps> {
    onHide?: () => void;
}

export function LeftSlideAnimation({ style, onHide, ...others }: LeftSlideAnimationProps): JSX.Element {
    const [visible, setIsSafeToRemove] = useContext(AnimatedPresenceContext);

    const handleHide = useHideCallback(setIsSafeToRemove, hideAnimationTiming, onHide);

    const screenWidth = Dimensions.get('screen').width;
    const offsetX = useRef(new Animated.Value(-screenWidth)).current;
    const showAnimation = useSpringAnimation(offsetX, 0);
    const hideAnimation = useTimingAnimation(offsetX, -screenWidth, hideAnimationTiming, handleHide);

    const animatedStyle = useMemo(() => {
        return [
            style,
            {
                transform: [
                    {
                        translateX: offsetX
                    }
                ]
            }
        ];
    }, [offsetX, style]);

    useAnimationLifecycle(visible, showAnimation, hideAnimation);

    return <BaseBox {...others} style={animatedStyle} />;
}
