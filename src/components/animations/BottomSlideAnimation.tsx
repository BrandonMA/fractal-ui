import React, { useContext, useMemo, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useSpringAnimation, useTimingAnimation } from '../../animationHooks';
import { BaseBox, BaseBoxProps } from '../baseComponents';
import { AnimatedPresenceContext } from './AnimatedPresence';
import { useAnimationLifecycle } from './hooks/useAnimationLifecycle';
import { useHideCallback } from './hooks/useHideCallback';

export interface BottomSlideAnimationProps extends Partial<BaseBoxProps> {
    onHide?: () => void;
}

export function BottomSlideAnimation({ onHide, style, ...others }: BottomSlideAnimationProps): JSX.Element {
    const [visible, setIsSafeToRemove] = useContext(AnimatedPresenceContext);

    const handleHide = useHideCallback(setIsSafeToRemove, onHide);

    const screenHeight = Dimensions.get('screen').height;
    const offsetY = useRef(new Animated.Value(screenHeight)).current;
    const showAnimation = useSpringAnimation(offsetY, 0);
    const hideAnimation = useTimingAnimation(offsetY, screenHeight, 300, handleHide);

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
