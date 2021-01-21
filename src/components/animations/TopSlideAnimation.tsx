import React, { useContext, useMemo, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useSpringAnimation, useTimingAnimation } from '../../animationHooks';
import { BaseBox, BaseBoxProps } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';
import { useHideCallback } from './hooks/useHideCallback';
import { hideAnimationTiming } from './util/hideAnimationTiming';

export interface TopSlideAnimationProps extends Partial<BaseBoxProps> {
    onHide?: () => void;
}

export function TopSlideAnimation({ onHide, style, ...others }: TopSlideAnimationProps): JSX.Element {
    const [visible, setIsSafeToRemove] = useContext(AnimatedPresenceContext);

    const handleHide = useHideCallback(setIsSafeToRemove, hideAnimationTiming, onHide);

    const screenHeight = Dimensions.get('window').height;
    const offsetY = useRef(new Animated.Value(-screenHeight)).current;
    const showAnimation = useSpringAnimation(offsetY, 0);
    const hideAnimation = useTimingAnimation(offsetY, -screenHeight, hideAnimationTiming, handleHide);

    const animatedStyle = useMemo(() => {
        return [
            style,
            {
                transform: [
                    {
                        translateY: offsetY
                    }
                ]
            }
        ];
    }, [offsetY, style]);

    useAnimationLifecycle(visible, showAnimation, hideAnimation);

    return <BaseBox {...others} style={animatedStyle} />;
}
